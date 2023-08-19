import React from 'react';
import '../App.css';

const ProfileCard = ({ img, name, about, location }) => {
    const handleSummaryClick = () => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

        window.open(mapsUrl, '_blank');
    };

    return (
        <div className='card'>
            <img src={img} alt='img' className='img'></img>
            <p id='name'>{name}</p>
            <p id='info'>{about}</p>
            <button onClick={handleSummaryClick}>Summary</button>
        </div>
    );
};

export default ProfileCard;
