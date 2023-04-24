import React,{useEffect, useState } from 'react';

import {textCuter} from '../../Functions/TextCuter'

import { fetchNui } from '../../utils/fetchNui';

import profileImge from '../../Images/profile.png'


import './MainPage.css'
import Dm from './Dm';


const MainPage = () => {
    const [chatDetails , setChatDetails] = useState([])
    const [isDmOpen , setIsDmOpen] = useState(false);
    const [selectedDm , setSelectedDm] = useState([]);
    
    const data = [
        {
            "Reza":"09172511401",
            "lastMessage":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, praesentium!",
            "unread":"2",
            "priority" :"1",
        },
        {
            "Siavash":"09172511402",
            "lastMessage":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, praesentium!",
            "unread":"0",
            "priority" :"3",
        },
        {
            "Ali":"09172511403",
            "lastMessage":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, praesentium!",
            "unread":"4",
            "priority" :"2",
        }
    ]
    useEffect(()=>{
        // fetchNui("GetContacts", {}).then(data=>{
        //     setContacts(data)
        //   });
        data.sort(function(a, b){return a.priority-b.priority})
        setChatDetails(data)
        } , [])

    const openChatHandler = (e) => {
        setSelectedDm(e.currentTarget.id.split("-"))

        setIsDmOpen(true)

    }

    return (
        <div id='messenger-container'>
            <h1>Your Messages</h1>
            {chatDetails.map(item=><div id={`${Object.values(item)[0]}-${Object.keys(item)[0]}`} onClick={openChatHandler} className='chat-menu-container' key={Object.values(item)[0]} >
                <img src={profileImge} alt="userprofile" />
                <div id='chat-overview'>
                    <h1>{Object.keys(item)[0]}</h1>
                    <p>{textCuter(Object.values(item)[1])}</p>
                </div>
                {Object.values(item)[2] !== "0" && <span id='unread-count'>{Object.values(item)[2]}</span>}
            </div>)}
            {isDmOpen && <Dm setIsDmOpen={setIsDmOpen} athorize={selectedDm}/>}
        </div>
    );
}

export default MainPage;
