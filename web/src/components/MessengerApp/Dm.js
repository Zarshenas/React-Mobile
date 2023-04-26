import React,{useEffect,useState,useRef} from 'react';

import './Dm.css';

import { fetchNui } from '../../utils/fetchNui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dm = ({athorize ,setIsDmOpen}) => {
    const inputRef = useRef();
    const [smoothScroll , setSmoothScroll] = useState(false)
    const [chatsText, setChatsText] = useState([]);
    const [userMessege, setUserMessege] = useState("");
    const [userMessageInfo, setUserMessageInfo] = useState({});
    
    const [today, setDate] = useState(new Date());
    const locale = 'en';
    
    
    const backHandler = () => {
        setIsDmOpen(false)
        setSmoothScroll(false)
      }
      
      
      const myRef = useRef(null)
      
      const executeScroll = () => myRef.current.scrollIntoView()   
      
    useEffect(() => {
        inputRef.current.focus()

        fetchNui("GetSelectedDmChats",{}).then(data=>{
            setChatsText(data[`${athorize[0]}`])
        });
        executeScroll();
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(()=>{
        executeScroll()
    },[chatsText])
    
    
    const messageHandler = (e) => {
        setUserMessege(e.target.value)
    }

    const sendWithEnterKey = (e) => {
        if (["Enter"].includes(e.code)) {
            sendHandler();
        }
    }
    
    
    const sendHandler = () => {
        setSmoothScroll(true)
        if (!inputRef.current.value) return;
        const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });
        
        setUserMessageInfo({isSelfMessage: true, text: userMessege, time: time});
        
        inputRef.current.value = "";
        inputRef.current.focus();
    }
    useEffect(() => {
        fetchNui("SendMessage",{userMessageInfo , athorize :athorize[0]}).then(data=>{
            setChatsText(data[`${athorize[0]}`])
        })
    }, [userMessageInfo , athorize]);
    return (
        <div className='dm-bg'>
            <div id='dm-header'>
                <span onClick={backHandler}>
                    <FontAwesomeIcon icon="fa-chevron-left" />
                </span>
                <h1>{athorize[1]}</h1>
            </div>
            <div className={`messages-container ${smoothScroll ? "chatSmoothScroll" : ""}`} >
                {chatsText.map(dm => dm.text && <div id={dm.isSelfMessage? "selfMessage" : "notSelfMessage"} className='message-container'><p>{dm.text}</p><p>{dm.time}</p></div>
                )}
                <div ref={myRef}></div>
            </div>
            <div className='send-con'>
                <input onKeyPress={sendWithEnterKey} ref={inputRef} onChange={messageHandler} type="text" />
                <span onClick={sendHandler} ><FontAwesomeIcon icon="fa-paper-plane" /></span>
            </div>
        </div>
    );
}

export default Dm;
