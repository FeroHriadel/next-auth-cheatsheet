import React from 'react';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';



export default async function ProtectedServerPage () {
  const session = await getServerSession(options);
  console.log('******************SESSION FROM SERVER COMPONENT');
  console.log(session);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server');
  }

  return (
    <div>
      <h1>Protected ServerPage</h1>
      <p>{JSON.stringify(session)}</p>
    </div>
  )
}
