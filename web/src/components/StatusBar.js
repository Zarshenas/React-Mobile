import React,{useEffect ,useState} from 'react';

import './StatusBar.css';

import batteryIcon from '../Images/battery.png';
import signalIcon from '../Images/signal.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const StatusBar = ({airplaneMode}) => {
    const locale = 'en';
    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

    useEffect(() => {
      const timer = setInterval(() => { // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, []);
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });
    return (
        <div className='statusbar-container'>
            <p>{time}</p>
            {airplaneMode && <FontAwesomeIcon id='airPlane' icon="fa-solid fa-plane" />}
            <img draggable="false" id='signalIcon' src={signalIcon} alt="signal" />
            <img draggable="false" id='batteryIcon' src={batteryIcon} alt="battery" />
        </div>
    );
}

export default StatusBar;
