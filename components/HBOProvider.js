import React, { useState, useContext } from 'react'
import ls from 'local-storage';


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
  // add to watch list account
  const [watchList, setWatchList] = useState(ls.get('myList'));


  const addToList = (video) => {
    let myList;

    if (ls('myList') !== null) {
      myList = ls.get('myList');
      myList.push(video);
      // set LS with the new pushed array myList
      ls.set('myList', myList);
      // once its in lS update state
      setWatchList(myList);
    } else {
      // set LS with the an array witht the video
      ls.set('myList', [video])
    }

  }

  // remove movie from list
  const removeFromList = (videoId) => {
    let myList = ls('myList');
    // filter the movie x is clicked on
    myList = myList.filter((item) => item.mediaId !== videoId);
    // set new filtered myList var into LS
    ls.set('myList', myList);
    // save new LS myList to state
    setWatchList(myList);
  }




  const thumbTypes = ['large-v', 'large-h', 'small-v', 'small-h'];



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
      setSearchOpenAction,
      thumbTypes,
      addToList,
      removeFromList,
      watchList
    }}>
      {children}
    </StateContext.Provider>
  )
}





