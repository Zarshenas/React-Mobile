import React from 'react';

// import Keypad from './Keypad';
import ContactsAppButton from './ContactsAppButton';
import KeypadPhoneSection from './KeypadPhoneSection';
import RecentsAppButton from './RecentsAppButton';

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
