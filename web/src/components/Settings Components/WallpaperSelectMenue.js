import React , {useContext} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { appSettingContext } from '../App';

import wallpaper1 from "../../Images/Backgrounds/1.png";
import wallpaper2 from "../../Images/Backgrounds/2.png";
import wallpaper3 from "../../Images/Backgrounds/3.png";
import wallpaper4 from "../../Images/Backgrounds/4.png";
import wallpaper5 from "../../Images/Backgrounds/5.png";
import wallpaper6 from "../../Images/Backgrounds/6.png";
import wallpaper7 from "../../Images/Backgrounds/7.png";
import wallpaper8 from "../../Images/Backgrounds/8.png";
import wallpaper9 from "../../Images/Backgrounds/9.png";
import wallpaper10 from "../../Images/Backgrounds/10.png";
import wallpaper11 from "../../Images/Backgrounds/11.png";
import wallpaper12 from "../../Images/Backgrounds/12.png";
import wallpaper13 from "../../Images/Backgrounds/13.png";
import wallpaper14 from "../../Images/Backgrounds/14.png";

import "./WallpaperSelectMenue.css";
import { fetchNui } from "../../utils/fetchNui";


const WallpaperSelectMenue = ({isComponentOpen,setIsComponentOpen}) => {
    const {phoneSettingData , setPhoneSettingData} = useContext(appSettingContext);

    const closeWindowHandler = () =>{
        setIsComponentOpen({...isComponentOpen , wallpaper: false})
    }

    const clickHandler = (e) =>{
      setPhoneSettingData({...phoneSettingData , phoneWallpaper : e.target.attributes.alt.nodeValue})
      fetchNui("UpdatedSetting" , phoneSettingData)
    }

  return (
    <div id="wallpaperimages-container">
      <div onClick={closeWindowHandler} className="Back-Btn">
        <FontAwesomeIcon icon="fa-chevron-left" />
        <h3>Wallpapers</h3>
      </div>
      <div className="alignImages">
        <img id={phoneSettingData.phoneWallpaper ==="1"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper1} alt="1" />
        <img id={phoneSettingData.phoneWallpaper ==="2"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper2} alt="2" />
        <img id={phoneSettingData.phoneWallpaper ==="3"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper3} alt="3" />
        <img id={phoneSettingData.phoneWallpaper ==="4"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper4} alt="4" />
        <img id={phoneSettingData.phoneWallpaper ==="5"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper5} alt="5" />
        <img id={phoneSettingData.phoneWallpaper ==="6"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper6} alt="6" />
        <img id={phoneSettingData.phoneWallpaper ==="7"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper7} alt="7" />
        <img id={phoneSettingData.phoneWallpaper ==="8"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper8} alt="8" />
        <img id={phoneSettingData.phoneWallpaper ==="9"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper9} alt="9" />
        <img id={phoneSettingData.phoneWallpaper ==="10"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper10} alt="10" />
        <img id={phoneSettingData.phoneWallpaper ==="11"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper11} alt="11" />
        <img id={phoneSettingData.phoneWallpaper ==="12"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper12} alt="12" />
        <img id={phoneSettingData.phoneWallpaper ==="13"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper13} alt="13" />
        <img id={phoneSettingData.phoneWallpaper ==="14"?  "selected": ""} onClick={clickHandler} draggable={false} src={wallpaper14} alt="14" />
      </div>
    </div>
  );
};

export default WallpaperSelectMenue;
