"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className='flex flex-col'>
        Signed in as {session?.user?.email}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      Not signed in
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
