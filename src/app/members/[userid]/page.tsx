import React from "react";

export default function MemberDetailedPage({
  params: { userId },
}: {
  params: { userid: string };
}) {
  return <div>{userId}</div>;
}
