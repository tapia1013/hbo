import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ls from 'local-storage';
import { useMounted } from './Hooks/useMounted';



const AuthCheck = (component) => {
  // check if user is logged in
  // const [userLoggedIn, setUserLoggedIn] = useState(false);

  const router = useRouter();
  const { hasMounted } = useMounted();
  let activeUID = ls('activeUID');
  // check if not = to null
  let users = ls('users') !== null ? ls('users') : [];


  useEffect(() => {
    // if (users.length >= 1) {
    //   router.push('/login')
    // }

    // if theres no active id in LS we push to /create
    if (activeUID === null && users.length < 1) {
      router.push('/create')
    }
  }, []);




  if (users.length >= 1 && activeUID !== null) {
    return hasMounted ? (component) : (
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo"></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo"></div>
        </div>
      </div>
    )
  }






  return component
}

export default AuthCheck;
