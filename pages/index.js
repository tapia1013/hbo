import Head from 'next/head';
import { useEffect } from 'react';
import { useStateContext } from '../components/HBOProvider';
import Login from '../components/UI/Login/Login';
import { useRouter } from 'next/router';




export default function Home() {
  // this allows us to start using the context in HBOProvider
  const globalState = useStateContext();
  // we have to instantiate useRouter
  const router = useRouter();

  useEffect(() => {
    const loggedIn = false;
    if (loggedIn === false) {
      router.push('/create')
    }
  }, [])

  return (
    <div>
      <Login />
    </div>
  )
}
