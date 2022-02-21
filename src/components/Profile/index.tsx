import { getUser } from '../../services/localStorage';
import { BsPersonFill, BsEnvelopeFill, BsHouseDoorFill, BsArrowReturnLeft, BsCheckLg } from "react-icons/bs";
import LoginPageProps from '../Login';
import { Address, IProfile } from '../../store/interface';
import { useState } from 'react';




function Profile(props: IProfile) {
  console.log(props.addresse);
  
  

  return (
    
    <div className='sm:container sm:mx-auto' >
      <div className="grid grid-cols-8 gap-4 pt-6">

        <div className="col-start-3 col-end-7 ...  border rounded-box">


          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Hi {props.firstName}</h3>

            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Full name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.firstName} {props.lastName}</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">NIC</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.nic}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.email}</dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Address </dt>


                  {props.addresses?.map((address) => {

                    return (
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {address.doorNumber},{address.street},{address.city}

                      </dd>
                    );
                  })}


                </div>
              </dl>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Profile;
