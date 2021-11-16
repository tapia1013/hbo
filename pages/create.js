import Head from 'next/head'
import { useStateContext } from '../components/HBOProvider'



export default function CreateUser() {
  const globalState = useStateContext();

  console.log(globalState);

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
          <button className="create-user__save">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
