import { getUser } from '../../services/localStorage';
import { BsPersonFill, BsEnvelopeFill, BsHouseDoorFill} from "react-icons/bs";

function Profile() {


  return (
    <div className='sm:container sm:mx-auto' >
      <div className="grid grid-cols-8 gap-4 pt-6">

        <div className="col-start-3 col-end-7 ...  border rounded-box">

          <div className="card  shadow-2xl">

            <div className="card-body">
            <h2 className="card-title">Tharindu Kumarasinghe</h2>
              <div className="avatar">
                <div className="mb-8 rounded-btn w-24 h-24">
                  <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"/>
                </div>
              </div>

              <div className="card-actions">
              <BsEnvelopeFill/>  - tharindu123@gmail.com

              </div>

              <div className="card-actions">
              <BsPersonFill/>  - 9772241415V
          
               </div>

              <div className="card-actions">
              <BsHouseDoorFill/>  - Pasindu, Ella road, Elpitiya
          
              </div>
              
        

            </div>
          </div>



        </div>


      </div>
    </div>
  )
}

export default Profile;
