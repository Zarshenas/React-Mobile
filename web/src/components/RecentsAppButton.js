import React , {useContext} from 'react';

import clockIcon from '../Images/clockIcon.png';

import './RecentsAppButton.css'

import {appContext} from './App';

const RecentsAppButton = () => {
    const {isAppOpen ,setisAppOpen} = useContext(appContext);
    const openRecentHandler = () =>{
        if (isAppOpen.recents) {
            return false;
        }
        let closedAllApps = {};
        for(let item of Object.keys(isAppOpen)) {
            if(typeof isAppOpen[item] == "boolean") {
                closedAllApps = isAppOpen;
                closedAllApps[item] = false;
                setisAppOpen({...closedAllApps})
            }
        }
        setisAppOpen({...isAppOpen ,recents :true })
    }
    return (
        <div onClick={openRecentHandler} className='section'>
            <img src={clockIcon} alt="clock icon" />
            <p>Recents</p>
        </div>
    );
}

export default RecentsAppButton;
