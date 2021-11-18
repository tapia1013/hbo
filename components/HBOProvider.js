import React, { useState, useContext } from 'react'

export const StateContext = React.createContext();


export function useStateContext() {
  return useContext(StateContext)
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState('');

  const defaultUserImg = '/img/nye.JPG';

  const createUserAction = (e) => {
    setUser(e.target.value);
  };

  // for opening and closing side menu
  const [sideNavOpen, setSideNavOpenAction] = useState(false);

  //  for opening and closing top right user account
  const [accountModalOpen, setAccountModalOpenAction] = useState(false);

  const [searchOpen, setSearchOpenAction] = useState(false);



  // always pass anything above down here as a value
  return (
    // value is the state
    <StateContext.Provider value={{
      user,
      createUserAction,
      defaultUserImg,
      sideNavOpen,
      setSideNavOpenAction,
      sideNavOpen,
      accountModalOpen,
      setAccountModalOpenAction,
      searchOpen,
      setSearchOpenAction
    }}>
      {children}
    </StateContext.Provider>
  )
}





