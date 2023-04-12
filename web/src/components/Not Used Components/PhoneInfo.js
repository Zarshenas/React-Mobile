import React,{useEffect , useState} from 'react';

import './PhoneInfo.css';

import {fetchNui} from '../../utils/fetchNui';

import userProfile from '../../Images/profile.png';

const PhoneInfo = () => {
    const [myPhoneNumber , setMyPhoneNumber] = useState();
    const [myContactsCount , setMyContactsCount] = useState();
    const [playerName , setPlayerName] = useState();
    useEffect(() => {
        fetchNui("GetMyPhoneNumber", {}).then(data=>{
            setMyPhoneNumber(data)
        });
        fetchNui("GetContactsCount" , {}).then(data =>{
            setMyContactsCount(data)
        })
        fetchNui("GetPlayerName" , {}).then(data =>{
            setPlayerName(data)
        })
        
    }, []);
    return (
        <div className="owner-profile">
                <div className="profile-container">
                    <img draggable={false} width={"50px"} src={userProfile} alt="owner profile" />
                </div>
                <div className="profile-detail-container">
                    <p id='player-name'>{playerName}</p>
                    <div className="profile-detail">
                        <p>{myPhoneNumber}</p>
                        <p id='dot'>•</p>
                        <p>{myContactsCount} Contacts</p>
                    </div>
                </div>
            </div>
    );
}

export default PhoneInfo;
