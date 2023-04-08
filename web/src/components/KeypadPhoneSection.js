import React , {useContext} from 'react';

import keypadIcon from '../Images/keypad.png';

import {appContext} from './App';

const KeypadPhoneSection = () => {
    const {isAppOpen ,setisAppOpen }=useContext(appContext);
    const openKeypadHandler = () =>{
        if (isAppOpen.keypad) {
            return;
        }
        let closedAllApps = {};
        for(let item of Object.keys(isAppOpen)) {
            if(typeof isAppOpen[item] == "boolean") {
                closedAllApps = isAppOpen;
                closedAllApps[item] = false;
                setisAppOpen({...closedAllApps})
            }
        }
        setisAppOpen({...isAppOpen ,keypad :true })
    }


    return (
        <div onClick={openKeypadHandler} className='section'>
            <img src={keypadIcon} alt="keypad icon" />
            <p>Keypad</p>
        </div>
    );
}

export default KeypadPhoneSection;
