import React,{useEffect, useState } from 'react';

import {textCuter} from '../../Functions/TextCuter'

import profileImge from '../../Images/profile.png'


import './MainPage.css'
import Dm from './Dm';
import { fetchNui } from '../../utils/fetchNui';


const MainPage = () => {
    const [chatDetails , setChatDetails] = useState([])
    const [isDmOpen , setIsDmOpen] = useState(false);
    const [selectedDm , setSelectedDm] = useState([]);
    
    useEffect(()=>{
        fetchNui("GetLastMessegeInfo", {}).then(data=>{
            console.log(Object.values(data).sort(function(a, b){return a.priority-b.priority}))
            setChatDetails(Object.values(data).sort(function(a, b){return a.priority-b.priority}))
          });
        } , [])

        const openChatHandler = (e) => {
            setSelectedDm(e.currentTarget.id.split("-"))
            
            setIsDmOpen(true)
            
        }
    return (
        <div id='messenger-container'>
            <h1>Your Messages</h1>
            {chatDetails.map(item=><div id={`${Object.values(item)[2]}-${Object.keys(item)[2]}`} onClick={openChatHandler} className='chat-menu-container' key={Object.values(item)[0]} >
                <img src={profileImge} alt="userprofile" />
                <div id='chat-overview'>
                    <h1>{Object.keys(item)[2]}</h1>
                    <p>{textCuter(item.lastMessage)}</p>
                </div>
                {item.unread !== "0" && <span id='unread-count'>{item.unread}</span>}
            </div>)}
            {isDmOpen && <Dm setIsDmOpen={setIsDmOpen} athorize={selectedDm}/>}
        </div>
    );
}

export default MainPage;
