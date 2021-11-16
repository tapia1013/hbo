import Head from 'next/head'
import { useStateContext } from '../components/HBOProvider';
import ls from 'local-storage';
import { v4 } from 'uuid';
import { useRouter } from 'next/router';
import Login from '../components/UI/Login/Login';



const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  )
}

export default LoginPage;
