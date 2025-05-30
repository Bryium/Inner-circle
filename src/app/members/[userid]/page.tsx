import { getMemberByUserId } from "@/app/actions/MemberActions";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { notFound } from "next/navigation";
import React from "react";

export default async function MemberDetailedPage({
  params,
}: {
  params: { userId: string };
}) {
  const member = await getMemberByUserId(params.userId);

  if (!member) return notFound();

  return (
    <Card>
      <CardHeader className="text-2xl font-semibold text-default">
        Profile
      </CardHeader>
      <Divider />
      <CardBody>{member.description}</CardBody>
    </Card>
  );
}
