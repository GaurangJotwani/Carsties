'use client';

import React from 'react';
import { Button, Dropdown } from 'flowbite-react';
import Link from 'next/link';
import { HiUser, HiCog } from 'react-icons/hi2';
import { AiFillTrophy, AiFillCar, AiOutlineLogout } from 'react-icons/ai';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';

type Props = {
  user: Partial<User>;
};

export default function UserActions({ user }: Props) {
  return (
    <Dropdown inline label={`Welcome ${user.name}`}>
      <Dropdown.Item icon={HiUser}>
        <Link href="/">My Auctions</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillTrophy}>
        <Link href="/">Auctions won</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillCar}>
        <Link href="/">Sell my car</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={HiCog}>
        <Link href="/session">Session (dev only)</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        icon={AiOutlineLogout}
        onClick={() => signOut({ callback: '/' })}
      >
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}
