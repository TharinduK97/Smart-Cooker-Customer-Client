import { getUser } from '../../services/localStorage';

function Profile() {
    
  
    return (
      <div >
     User ID : <h1> {getUser()}</h1>
      </div>
    )
  }
  
  export default Profile;
  