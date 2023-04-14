import React , { useEffect ,useContext} from 'react';

import AudioPlayer ,{ RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './Ringtones.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {appSettingContext} from '../App'

import ringtone1 from '../../RingTones/1.mp3';
import ringtone2 from '../../RingTones/2.mp3';
import ringtone3 from '../../RingTones/3.mp3';
import { fetchNui } from '../../utils/fetchNui';

const Ringtones = ({isComponentOpen , setIsComponentOpen}) => {

    const {phoneSettingData , setPhoneSettingData} = useContext(appSettingContext)
    
    
    useEffect(()=>{
        
    },[])

    const backBtnHandler = () =>{
        setIsComponentOpen({...isComponentOpen , ringtone:false})
    }
    return (
        <div className='RingTonesList-container'>
            <div onClick={backBtnHandler} id='go-back'>
                <span><FontAwesomeIcon icon="fa-chevron-left" /></span>
                <span>Contacts</span>
            </div>
            <AudioPlayer
                src={ringtone1}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                customProgressBarSection={[]}
                showJumpControls={false}
                customControlsSection={
                    [
                        <label className="checkbox-con">
                        <input className='ringtone1' checked={phoneSettingData.ringtone === "1"} onChange={() => {setPhoneSettingData({...phoneSettingData ,ringtone:"1" }); fetchNui("UpdatedSetting" , phoneSettingData)}}  type="checkbox"/>
                        <div className="checkmark"></div>
                    </label>,
                      RHAP_UI.ADDITIONAL_CONTROLS,
                      RHAP_UI.MAIN_CONTROLS,
                      RHAP_UI.VOLUME_CONTROLS,
                    ]
                }
                header="Chicken Remix"
            />
            <AudioPlayer
                src={ringtone2}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                customProgressBarSection={[]}
                showJumpControls={false}
                customControlsSection={
                    [
                        <label className="checkbox-con">
                        <input className='ringtone2' checked={phoneSettingData.ringtone === "2"} onChange={() => {setPhoneSettingData({...phoneSettingData ,ringtone:"2" });fetchNui("UpdatedSetting" , phoneSettingData)}}  type="checkbox"/>
                        <div className="checkmark"></div>
                    </label>,
                      RHAP_UI.ADDITIONAL_CONTROLS,
                      RHAP_UI.MAIN_CONTROLS,
                      RHAP_UI.VOLUME_CONTROLS,
                    ]
                }
                header="Ahmad Zoghi"
            />
            <AudioPlayer
                src={ringtone3}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                customProgressBarSection={[]}
                showJumpControls={false}
                customControlsSection={
                    [
                        <label className="checkbox-con">
                            <input className='ringtone3' checked={phoneSettingData.ringtone === "3"} onChange={() => {setPhoneSettingData({...phoneSettingData ,ringtone:"3" });fetchNui("UpdatedSetting" , phoneSettingData)}}  type="checkbox"/>
                            <div className="checkmark"></div>
                        </label>,
                      
                      RHAP_UI.ADDITIONAL_CONTROLS,
                      RHAP_UI.MAIN_CONTROLS,
                      RHAP_UI.VOLUME_CONTROLS,
                    ]
                }
                header="Iphone"
            />
        </div>
    );
}

export default Ringtones;
