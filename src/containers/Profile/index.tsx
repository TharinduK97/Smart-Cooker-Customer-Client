import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ProfilePage from '../../components/Profile/index';
import { fetchProfile, selectProfile } from '../../store/profileSlice';
import { Address } from '../../store/interface';



function Profile() {

    const dispatch = useAppDispatch();
    const profile = useAppSelector(selectProfile);

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    
    return (
        <div>
           <ProfilePage profile={profile?.profile} />

        </div>
    )
}

export default Profile