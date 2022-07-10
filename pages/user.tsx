import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSwr from 'swr';
import { getApi } from '../lib/api';
import { useGetUser } from '../lib/api-hooks';

export default function User() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { data, isLoading, isError } = useGetUser();

  useEffect(() => {
    if (!session && status !== 'loading') {
      router.push('/');
    }
  }, [router, session, status]);

  return (
    <div>
      <p>You are logged in</p>
      {isLoading ? <p>Loading...</p> : JSON.stringify(data)}
    </div>
  );
}
