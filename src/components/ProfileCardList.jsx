import React from 'react';
import ProfileCard from './ProfileCard';
import data from '../data.json';

const ProfileCardList = () => {
    return (
        <div className='profile-card-list'>
            {data.map((profile, index) => (
                <ProfileCard
                    key={index}
                    img={profile.img}
                    name={profile.name}
                    about={profile.about}
                    location={profile.location}
                />
            ))}
        </div>
    );
};

export default ProfileCardList;
