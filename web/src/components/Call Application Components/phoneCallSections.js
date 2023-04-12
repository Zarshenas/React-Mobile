import React from 'react';

// import Keypad from './Keypad';
import ContactsAppButton from '../Contacts Application Components/ContactsAppButton';
import KeypadPhoneSection from './KeypadPhoneSection';
import RecentsAppButton from './Recent Calls Components/RecentsAppButton';

import './phoneCallSections.css';

const PhoneCallSections = () => {
    return (
        <div className='sections'>
            <RecentsAppButton/>
            <ContactsAppButton/>
            <KeypadPhoneSection/>
        </div>
    );
}

export default PhoneCallSections;
