import React from 'react';

import './PhoneInfo.css';

import userProfile from '../../Images/call.png';

const PhoneInfo = () => {
    return (
        <div className="owner-profile">
                <div className="profile-container">
                    <img draggable={false} width={"50px"} src={userProfile} alt="owner profile" />
                </div>
                <div className="profile-detail-container">
                    <p id='player-name'>{"Player Name"}</p>
                    <div className="profile-detail">
                        <p>{"09172511403"}</p>
                        <p id='dot'>•</p>
                        <p>{"10"} Contacts</p>
                    </div>
                </div>
            </div>
    );
}

export default PhoneInfo;
