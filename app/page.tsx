import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";



export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main>
      {
        session
        ?
        <>

          <p>logged in: {JSON.stringify(session, null, 2)}</p>
        </>
        :
        <h1>You shall not pass</h1>
      }
    </main>
  );
}
