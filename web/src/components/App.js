import React,{useState , createContext, useEffect ,createRef , useContext} from 'react';
import './App.css'

import MainApps from './MainApps';
import Keypad from './Call Application Components/Keypad';
import StatusBar from './StatusBar';
import HomeButton from './HomeButton';
import PhoneCallSections from './Call Application Components/phoneCallSections';
import ContactsComponent from './Contacts Application Components/ContactsComponent';
import RecentCalls from './Call Application Components/Recent Calls Components/RecentCalls';
import SettingsComponent from './Settings Components/SettingsComponent';

import {VisibilityCtx} from '../providers/VisibilityProvider.tsx'


import wallpaper1 from "../Images/Backgrounds/1.png";
import wallpaper2 from "../Images/Backgrounds/2.png";
import wallpaper3 from "../Images/Backgrounds/3.png";
import wallpaper4 from "../Images/Backgrounds/4.png";
import wallpaper5 from "../Images/Backgrounds/5.png";
import wallpaper6 from "../Images/Backgrounds/6.png";
import wallpaper7 from "../Images/Backgrounds/7.png";
import wallpaper8 from "../Images/Backgrounds/8.png";
import wallpaper9 from "../Images/Backgrounds/9.png";
import wallpaper10 from "../Images/Backgrounds/10.png";
import wallpaper11 from "../Images/Backgrounds/11.png";
import wallpaper12 from "../Images/Backgrounds/12.png";
import wallpaper13 from "../Images/Backgrounds/13.png";
import wallpaper14 from "../Images/Backgrounds/14.png";



import { fetchNui } from '../utils/fetchNui';
import phoneBody from '../Images/phone.png';
import frontCamera from '../Images/frontcamera.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import {faPaperPlane,faUser,faPlane,faChevronRight, faChevronLeft,faPhone , faComment , faMagnifyingGlass , faCoffee } from '@fortawesome/free-solid-svg-icons'
import OutGoingCall from './Call Application Components/InComing And Outgoing Call Components/OutGoingCall';
import MainPage from './MessengerApp/MainPage';


library.add(faPaperPlane,faUser,faPlane,faChevronRight,faChevronLeft , faPhone , faMagnifyingGlass , faCoffee , faComment);



export const appContext = createContext();
export const appSettingContext = createContext();
export const inCallContext = createContext();
export const outCallContext = createContext();

const backGroundRef = createRef();

const App = () => {
  const {visible,setVisible} = useContext(VisibilityCtx);
  useEffect(() => {
    if(visible) return;
    const showHandler = (e)=> {
      if (["F!"].includes(e.code)) {
        console.log("ff");
        fetchNui('showTheUi');
        setVisible(true);
      }
      
    }
    window.addEventListener("keydown", showHandler)
    // cleanup this component
    return () => {
      window.removeEventListener('keydown', showHandler);
    };
  },[visible , setVisible])

  
  const [isAddContactOpen , setIsAddContactOpen] = useState(false);
  const [isOutGoingCallOpen , setIsOutGoingCallOpen] = useState(false);
  const [isIncomingCallOpen , setIsIncomingCallOpen] = useState(false);

  function chooseImage(id) {
    switch (id) {
      case "1":
        return wallpaper1;
      case "2":
        return wallpaper2;
      case "3":
        return wallpaper3;     
      case "4":
        return wallpaper4;
      case "5":
        return wallpaper5;
      case "6":
        return wallpaper6;
      case "7":
        return wallpaper7;
      case "8":
        return wallpaper8;
      case "9":
        return wallpaper9;
      case "10":
        return wallpaper10;     
      case "11":
        return wallpaper11;
      case "12":
        return wallpaper12;
      case "13":
        return wallpaper13;
      case "14":
        return wallpaper14;
    
    
      default:
        break;
    }
  }
  
  const [isAppOpen, setisAppOpen] = useState({
    keypad:false,
    messager:false,
    contacts:false,
    settings:false,
    recents:false,
  });

  const [phoneSettingData , setPhoneSettingData] = useState({});
  useEffect(() => {
    setisAppOpen({
      keypad:false,
      messager:false,
      contacts:false,
      settings:false,
      recents:false,
    })
  },[visible])

  useEffect(()=>{
    //comes from server 
    fetchNui("GetPhoneSettings" , {}).then(data => {
      setPhoneSettingData(data)
    })
  } , [])
  useEffect(()=>{
    backGroundRef.current.style.backgroundImage = `url(${chooseImage(phoneSettingData.phoneWallpaper)})`;
  } , [phoneSettingData])
  

  return (
    <div className="nui-wrapper">
      <img draggable="false" id='phoneBody' src={phoneBody} alt="phoneBody" />
      <div ref={backGroundRef} className='phone-borders' style={{borderColor : phoneSettingData.frameColor}}>
      <img draggable="false" id='frontcamera' src={frontCamera} alt="frontcamera" />
      <StatusBar airplaneMode={phoneSettingData.airplaneMode}/>


      <outCallContext.Provider value={{isOutGoingCallOpen , setIsOutGoingCallOpen}}>
      <inCallContext.Provider value={{isIncomingCallOpen , setIsIncomingCallOpen}}>
        <appSettingContext.Provider value={{phoneSettingData , setPhoneSettingData}}>
          <appContext.Provider value={{isAppOpen ,setisAppOpen}}>
            {Object.values(isAppOpen).every((app) => app === false) && <MainApps/>}
            {isAppOpen.keypad&&<Keypad isAddContactOpen={isAddContactOpen} setIsAddContactOpen={setIsAddContactOpen}/>}
            {isAppOpen.recents&&<RecentCalls/>}
            {isAppOpen.contacts&&<ContactsComponent isAddContactOpen={isAddContactOpen} setIsAddContactOpen={setIsAddContactOpen}/>}
            {isAppOpen.settings&&<SettingsComponent setSettings={setPhoneSettingData} settings={phoneSettingData}/>}
                      {/* messenger */}
            {isAppOpen.messager && <MainPage/>}
                      {/* messenger */}
            { (isAppOpen.keypad || isAppOpen.recents ||isAppOpen.contacts ) && <PhoneCallSections />}
            {!isIncomingCallOpen && <HomeButton setIsAddContactOpen={setIsAddContactOpen}/>}
            {isOutGoingCallOpen && <OutGoingCall/>}
          </appContext.Provider>
        </appSettingContext.Provider>
      </inCallContext.Provider>
      </outCallContext.Provider>
      </div>
    </div>
  );
}

export default App;