import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/demo/screen/1');
  }, []);
  return <p>Redirecting...</p>;
};

export default Index;
