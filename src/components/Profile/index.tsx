import { getUser } from '../../services/localStorage';

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
              

              <p className='text-lg'>NIC - 972241415V</p>
              <p className='text-lg'> tharindu123@gamil.com</p>
              <p className='text-lg'>Address</p>
              <p className='text-lg'>pasindu, ella road, elpitiya</p>


            </div>
          </div>



        </div>


      </div>
    </div>
  )
}

export default Profile;
