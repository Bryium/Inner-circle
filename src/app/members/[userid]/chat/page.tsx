import { CardHeader, Divider, CardBody } from "@heroui/react";
import React from "react";

export default function ChatPage() {
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-default">
        Chat
      </CardHeader>
      <Divider />
      <CardBody>Chat goes here, You can write your first message here</CardBody>
    </>
  );
}
