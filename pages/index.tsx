import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Base Auth</h1>
      {!session ? (
        <>
          <a
            href={`/api/auth/signin`}
            onClick={e => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        </>
      ) : (
        <>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
