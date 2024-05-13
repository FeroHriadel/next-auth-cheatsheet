'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';



const ProtectedClientPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/api/auth/signin?callbackUrl=/client')
    },
  });
  console.log('******************SESSION FROM CLIENT COMPONENT');
  console.log(session);

  return (
    <div>
        <h1>ProtectedClientPage</h1>
        {
            session
            &&
            <p>{JSON.stringify(session, null, 2)}</p>
        }
    </div>
  )
}

export default ProtectedClientPage