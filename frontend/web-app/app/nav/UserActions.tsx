'use client';

import React from 'react';
import { Button, Dropdown } from 'flowbite-react';
import Link from 'next/link';
import { HiUser, HiCog } from 'react-icons/hi2';
import { AiFillTrophy, AiFillCar, AiOutlineLogout } from 'react-icons/ai';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useParamsStore } from '@/hooks/useParamsStore';

type Props = {
  user: User;
};

export default function UserActions({ user }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const setParams = useParamsStore((state) => state.setParams);

  function setWinner() {
    setParams({ winner: user.username, seller: undefined });
    if (pathname != '/') {
      router.push('/');
    }
  }

  function setSeller() {
    setParams({ seller: user.username, winner: undefined });
    if (pathname != '/') {
      router.push('/');
    }
  }

  return (
    <Dropdown inline label={`Welcome ${user.name}`}>
      <Dropdown.Item icon={HiUser} onClick={setSeller}>
        My Auctions
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillTrophy} onClick={setWinner}>
        Auctions won
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillCar}>
        <Link href="/auctions/create">Sell my car</Link>
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
