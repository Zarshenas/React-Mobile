import React , {useContext} from 'react';

import './HomeButton.css';

import {appContext} from './App'

import {VisibilityCtx} from '../providers/VisibilityProvider.tsx'

const HomeButton = ({setIsAddContactOpen}) => {
    const {visible,setVisible} = useContext(VisibilityCtx);
    const {isAppOpen ,setisAppOpen }=useContext(appContext);

    const homeButtonHandler = ()=>{
        if (!Object.values(isAppOpen).some(val => val === true)) {
            setVisible(false)
        }
        setIsAddContactOpen(false);
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
