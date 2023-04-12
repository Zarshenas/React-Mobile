import React , {useContext} from 'react';

import './ContactsAppButton.css';

import contactsIcon from '../../Images/User Contacts Icon.png';

import {appContext} from '../App';

const ContactsAppButton = () => {
    const {isAppOpen ,setisAppOpen} = useContext(appContext);
    const openContactsHandler = () =>{
        if (isAppOpen.contacts) {
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
        setisAppOpen({...isAppOpen ,contacts :true });
    }
    return (
        <div onClick={openContactsHandler} className='section'>
            <img src={contactsIcon} alt="contacts icon" />
            <p>Contacts</p>
        </div>
    );
}

export default ContactsAppButton;
