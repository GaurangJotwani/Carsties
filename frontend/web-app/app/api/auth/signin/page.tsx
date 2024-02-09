import React from 'react';
import EmptyFilter from '@/app/shared/EmptyFilter';

export default function Page({
  searchParams,
}: {
  searchParams: { callbackUrl: string };
}) {
  return (
    <EmptyFilter
      title="You need to logged in to do that"
      subtitle="Please click below to sign in"
      showLogin
      callbackUrl={searchParams.callbackUrl}
    ></EmptyFilter>
  );
}
