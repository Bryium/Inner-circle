import React from "react";
import { getMembers } from "../actions/MemberActions";

export default async function MembersPage() {
  const members = await getMembers();
  return (
    <div>{members && members.map(({ name }) => <p key={name}>{name}</p>)}</div>
  );
}
