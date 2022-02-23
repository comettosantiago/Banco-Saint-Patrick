import PasswordButton from '../components/PasswordButton';

const NumKeyboard = ({handlePassword, handleDelete}) => {
  return (
      <div className='container-keyboard'>
        <div className='buttons-keyboard'>
          <div><PasswordButton onClick={handlePassword} label="1" value="1"/></div>
          <div><PasswordButton onClick={handlePassword} label="2" value="2"/></div>
          <div><PasswordButton onClick={handlePassword} label="3" value="3"/></div>
          <div><PasswordButton onClick={handlePassword} label="4" value="4"/></div>
          <div><PasswordButton onClick={handlePassword} label="5" value="5"/></div>
          <div><PasswordButton onClick={handlePassword} label="6" value="6"/></div>
          <div><PasswordButton onClick={handlePassword} label="7" value="7"/></div>
          <div><PasswordButton onClick={handlePassword} label="8" value="8"/></div>
          <div><PasswordButton onClick={handlePassword} label="9" value="9"/></div>
          <div></div>
          <div><PasswordButton onClick={handlePassword} label="0" value="0"/></div>
          <div className='btn-delete'>
          <button onClick={handleDelete}>
            <img src="https://www.svgrepo.com/show/345676/delete-back-2.svg" alt='del' aria-hidden="true" ></img>
            </button>
          </div>
        </div>
      </div> 
  )
}

export default NumKeyboard;