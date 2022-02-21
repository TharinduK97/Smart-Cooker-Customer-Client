import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ProfilePage from '../../components/Profile/index';
import { fetchProfile, selectProfile } from '../../store/profileSlice';
import { Address,IProfile } from '../../store/interface';



function Profile() {

    const dispatch = useAppDispatch();
    const {profile} = useAppSelector(selectProfile);

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    if(!profile){
        return(
            <div>
                Loading ...
            </div>
        )
    }
    return (
        <div>
          
           <ProfilePage {...profile} />

        </div>
    )
}

export default Profile