import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

import WidgetInbox from "../../components/widgetInbox";

//! İcon
import BatteryFullIcon from '@material-ui/icons/BatteryFull'; 
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FaceIcon from '@material-ui/icons/Face';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


function Index() {    


     useEffect(() => { 
        
            //! http://localhost:3000/Profile?id=1
            let key_value= window.location.search; //! ?id=1
            //console.log("key_value:",key_value);


            let urlParams = new URLSearchParams(key_value); //! 1
            let urlParams_id = urlParams.get('id');
            
            //console.log("urlParams_id:",urlParams_id);
           
     }, []);

  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                   
                        <div style={{ display:"flex", gap:"5px" }}>
                          <div style={{ width:"350px" }}> 
                             <WidgetInbox
                                backgroundColor={"#F1F1F1"}
                                onlineStatus={false}

                                userId="1"
                                userUrl="Profile?id=1"
                                userImage="./assets/img/1.jpg"
                                userNameSurname="Olga Sukhorukova"
                                colorUserNameSurname="black"
                                fontSizeUserNameSurname="14px"
                                fontWeightUserNameSurname="900"

                                message="Project has been already"
                                colorMessage="#540A0A"
                                fontSizeMessage="14px"
                                fontWeightMessage="100"

                                time="08:45"
                                colorTime="#540A0A"
                                fontSizeTime="12px"
                                fontWeightTime="400"
                             />
                          </div>
                        </div>
                   
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
