import React , {useContext} from 'react';

import './HomeButton.css';

import {appContext} from './App'

const HomeButton = () => {
    const {isAppOpen ,setisAppOpen }=useContext(appContext);
    const homeButtonHandler = ()=>{
        let closedAllApps = {};
        for(let item of Object.keys(isAppOpen)) {
            if(typeof isAppOpen[item] == "boolean") {
                closedAllApps = isAppOpen;
                closedAllApps[item] = false;
                setisAppOpen({...closedAllApps})
            }
        }
    }
    return (
        <div id='homeBtn' onClick={homeButtonHandler}>
            
        </div>
    );
}

export default HomeButton;
