import Head from 'next/head'
import { useStateContext } from '../components/HBOProvider';
import ls from 'local-storage';
import { v4 } from 'uuid';
import { useRouter } from 'next/router';




export default function CreateUser() {
  const globalState = useStateContext();
  const router = useRouter();

  // save user name to localstorage
  const saveUser = () => {
    let users = [];
    let user;

    // if theres no user in LS do this
    if (ls('users') < 1) {
      user = {
        id: v4(),
        user: globalState.user,
        myListID: []
      }
      // push this object user to the empty user array
      users.push(user);
      // decalre list of users in LS
      ls('users', users);

      console.log('users: ', users);
      console.log('lsusers: ', ls('users'));
    } else {
      // if there IS other users in LS like registering newUsrs
      users = ls('users');
      user = {
        id: v4(),
        user: globalState.user,
        myListID: []
      }
      users.push(user);
      // assign to users to be new users var
      ls('users', users);

      console.log('users: ', users);
      console.log('lsusers: ', ls('users'));

      // redirect
      router.push('/login')
    }
  }





  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">
            Who Is Watching?
          </span>
        </div>

        <div className="create-user__form">
          <img
            className="create-user__user-img"
            src={globalState.defaultUserImg}
          />
          <div className="create-user__input-group">
            <label>Name</label>
            <input
              value={globalState.user}
              onChange={globalState.createUserAction}
              type="text"
              className="create-user__inputText"
            />
            <div className="create-user__colors">
              <div
                className="create-user__color 
                create-user__color--active"
                style={{
                  background: 'rgb(2,255,64)',
                  background: 'linear-gradient(135deg,rgba(2,27,64,1) 11%, rgba(119,30,135,1)100%)'
                }}
              />

              <div
                className="create-user__color"
                style={{
                  background: 'rgb(2,255,64)',
                  background: 'linear-gradient(135deg,rgba(250,5,150,1) 11%, rgba(255,255,255,1)100%)'
                }}
              />

              <div
                className="create-user__color"
                style={{
                  background: 'rgb(2,255,64)',
                  background: 'linear-gradient(135deg,rgba(92,255,64,1) 11%, rgba(119,30,135,1)100%)'
                }}
              />

              <div
                className="create-user__color"
                style={{
                  background: 'rgb(2,255,64)',
                  background: 'linear-gradient(135deg,rgba(2,27,255,1) 11%, rgba(119,30,19,1)100%)'
                }}
              />

              <div
                className="create-user__color"
                style={{
                  background: 'rgb(2,255,64)',
                  background: 'linear-gradient(135deg,rgba(255,255,64,1) 11%, rgba(119,30,135,1)100%)'
                }}
              />
            </div>
          </div>
        </div>

        <div className="create-user__buttons">
          <button className="create-user__cancel">
            Cancel
          </button>
          <button
            className="create-user__save"
            onClick={saveUser}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
