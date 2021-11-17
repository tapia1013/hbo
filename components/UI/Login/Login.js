import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useStateContext } from '../../HBOProvider';
import ls from 'local-storage';
import { v4 } from 'uuid';
import { useRouter } from 'next/router';
import { useMounted } from '../../Hooks/useMounted';




const Login = () => {
  // this allows us to start using the context in HBOProvider
  const globalState = useStateContext();

  const router = useRouter();

  const [loadingUsers, setLoadingUsers] = useState(false);

  // pullout users from the local storage if not null
  let users = ls('users') !== null
    ? ls('users')
    : []

  // start the hasMounted hook
  let { hasMounted } = useMounted();

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false)
    }

    console.log('load effect, ', users);
  }, []);


  console.log('declared users', users);

  // pass in users id
  const selectUser = (id) => {
    // console.log(id);
    // pass in new key to ls which is the active user id
    ls('activeUID', id)
    router.push('/')
  }

  // where we actually get the user and show them on screen
  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            className="login-user__user-box"
            key={user.id}
            onClick={() => selectUser(user.id)}
          >
            <img className="login-user__user-img" src="/img/nye.JPG" />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        )
      })
    }
  }


  // redirect to createPage if add user btn clicked
  const createUser = () => {
    router.push('/create')
  }


  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">
          Who Is Watching?
        </span>
      </div>

      <div className="login-user__form">
        {hasMounted ? showUsers() : ""}
      </div>

      <div className="login-user__buttons">
        <button
          className="login-user__kid"
          onClick={createUser}
        >
          Create User
        </button>
      </div>
    </div>
  )
}



export default Login;