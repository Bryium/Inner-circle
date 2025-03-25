"use client";

import { signOutUser } from "@/app/actions/authActions";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@heroui/react";
import { Session } from "next-auth";
import Link from "next/link";
import React from "react";

type Props = {
  user: Session["user"];
};

export default function UserMenu({ user }: Props) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="default"
          name={user?.name || "User Avatar"}
          size="sm"
          src={user?.image || "/images/user.png"}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="User actions menu">
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as="span"
            className="h-14 flex items-center"
            aria-label="username"
            key={""}
          >
            Signed in as{" "}
            <span className="ml-1 font-semibold">{user?.name}</span>
          </DropdownItem>
        </DropdownSection>
        <DropdownItem as={Link} href="/members/edit" key={""}>
          Edit Profile
        </DropdownItem>
        <DropdownItem color="danger" onClick={signOutUser} key={""}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
