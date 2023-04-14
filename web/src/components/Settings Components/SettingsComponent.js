import React , {useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SettingsComponent.css'
import WallpaperSelectMenue from './WallpaperSelectMenue';
import Ringtones from './Ringtones';
import PhoneInfo from '../UserInfoComponents/PhoneInfo';
import { fetchNui } from '../../utils/fetchNui';


const SettingsComponent = ({settings,setSettings}) => {

    const [isComponentOpen , setIsComponentOpen] = useState({
        wallpaper:false,
        ringtone:false,
    })
    
    const openWallpaperHandler = () => {
        setIsComponentOpen({...isComponentOpen,wallpaper :true})
    }

    const openRingtoneHandler = () => {
        setIsComponentOpen({...isComponentOpen,ringtone :true})
    }

    const frameColorHandler =(e) =>{
        setSettings({...settings,frameColor:e.target.value})
        fetchNui("UpdatedSetting" , settings)
    }

    const checkboxHandler = (e) => {
        setSettings({...settings , airplaneMode : e.target.checked})
        fetchNui("UpdatedSetting" , settings)
    }
    


    return (
        <div className='settings-container'>
            <h3>Settings</h3>
            <PhoneInfo/>
            <div className='general-section'>
                <div onClick={openWallpaperHandler}>
                    <p>Wallpaper</p>
                    <FontAwesomeIcon icon="fa-chevron-right" />
                </div>
                <div>
                    <p>Frame Color</p>
                    <input value={settings.frameColor} onChange={frameColorHandler} type="color" />
                </div>
                <div onClick={openRingtoneHandler}>
                    <p>Ringtone</p>
                    <FontAwesomeIcon icon="fa-chevron-right" />
                </div>
                <div>
                    <p>Airplane mode</p>
                    <input checked={settings.airplaneMode} onChange={checkboxHandler} className="apple-switch" type="checkbox"/>
                </div>
            </div>
            
            {isComponentOpen.wallpaper&&<WallpaperSelectMenue isComponentOpen={isComponentOpen} setIsComponentOpen={setIsComponentOpen}/>}
            {isComponentOpen.ringtone && <Ringtones isComponentOpen={isComponentOpen} setIsComponentOpen={setIsComponentOpen}/>}
        </div>
    );
}

export default SettingsComponent;
