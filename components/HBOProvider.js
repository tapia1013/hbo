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


  // always pass anything above down here as a value
  return (
    // value is the state
    <StateContext.Provider value={{
      user,
      createUserAction,
      defaultUserImg,
    }}>
      {children}
    </StateContext.Provider>
  )
}





