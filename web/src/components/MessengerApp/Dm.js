import React,{useEffect,useState, useRef} from 'react';

import './Dm.css';

import { fetchNui } from '../../utils/fetchNui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dm = ({athorize ,setIsDmOpen}) => {
    const bottomRef = useRef();

    const [chatsText, setChatsText] = useState([]);
    useEffect(() => {
        fetchNui("GetSelectedDmChats",{}).then(data=>{
                setChatsText(data[`${athorize[0]}`])
        });
        scrollToBottom();
    }, []);

      const backHandler = () => {
        setIsDmOpen(false)
      }

      const scrollToBottom = () => {
        bottomRef.current.scrollIntoView();
      }
    return (
        <div className='dm-bg'>
            <div id='dm-header'>
                <span onClick={backHandler}>
                    <FontAwesomeIcon icon="fa-chevron-left" />
                </span>
                <h1>{athorize[1]}</h1>
            </div>
            <div className='messages-container'>
                {chatsText.map(dm => <div id={dm.isSelfMessage? "selfMessage" : "notSelfMessage"} className='message-container'>
                    <p>{dm.text}</p>
                    <p>{dm.time}</p>
                </div>
                )}
                <div ref={bottomRef}></div>
            </div>
            <div className='send-con'>
                <input type="text" />
                <FontAwesomeIcon icon="fa-paper-plane" />
            </div>
        </div>
    );
}

export default Dm;
