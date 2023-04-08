import React , { useState , useRef , useEffect } from 'react';


import './Keypad.css';

import eraserIcon from '../../Images/eraser.png';


const PhoneCallUI = () => {
    const [playerFullNumber, setplayerFullNumber] = useState();

    const input = useRef(null);

    const displayNumber = (e) =>{
        if (input.current.value.toString().length===10) {
            return;
        }

        let clickedNumber = e.target.innerText;
        input.current.value += clickedNumber;
        setplayerFullNumber(input.current.value);
        input.current.focus();
    }

    const submitNumber = () =>{
        if (input.current.value.toString().length===10) {
            console.log(playerFullNumber);
        }else{
            console.log("tedad argham shomare telephone dorost nist ")
        }
    }

    const showHandler = (e)=>{
        let alowedCharacters = ["1","2","3","4","5","6","7","8","9","0","#","*"]
        if (!alowedCharacters.includes(e.key)) {
            e.preventDefault();
            return false;
        }else{
            setplayerFullNumber(input.current.value);
        }
        
    }

    const addToContactHandler = () =>{
        if (input.current.value.toString().length===10) {
            
        }else{
            return false
        }
    }
    useEffect(() => {
        input.current.focus();
      }, []);

    const eraserHandler = () =>{
        if (input.current.value) {
            input.current.value = input.current.value.slice(0 , input.current.value.toString().length - 1);
        }
        input.current.focus();
    }
    return (
        <div className='phone-numbering-container'>
            <button onClick={addToContactHandler}  id='addtocontact'>+</button>
            <input ref={input} className='showNumbers' maxLength={10} type="text" onKeyPress={showHandler} />
            <div className='numbers-container'>
                <button onClick={displayNumber}>1</button>
                <button onClick={displayNumber}>2</button>
                <button onClick={displayNumber}>3</button>
                <button onClick={displayNumber}>4</button>
                <button onClick={displayNumber}>5</button>
                <button onClick={displayNumber}>6</button>
                <button onClick={displayNumber}>7</button>
                <button onClick={displayNumber}>8</button>
                <button onClick={displayNumber}>9</button>
                <button onClick={displayNumber}>*</button>
                <button onClick={displayNumber}>0</button>
                <button onClick={displayNumber}>#</button>
                <button id='call-Btn' onClick={submitNumber}></button>
                <img onClick={eraserHandler} src={eraserIcon} id='eraser' alt='eraser' />
            </div>
        </div>
    );
}

export default PhoneCallUI;
