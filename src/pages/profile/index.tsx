import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

import WidgetPost from "../../components/widgetPost";

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

     
     const JsonData = [
         {
            "title":"Toplam Dosyalar",
            "content":"Sayısı: 1451 / 1 TB 200 GB 150 MB 100 KB",
            "icon": <AttachFileIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Dosyalar"); },
            "backgroundColor":"rgb(76, 175, 80)"
         },
         {
            "title":"Toplam Fotoğraflar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <PhotoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Fotoğraflar"); },
            "backgroundColor":"rgb(244, 67, 53)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          }
          
     ];

     
   
     

  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                   
                    <div style={{ width:"450px" }}>
                      <WidgetPost
                        backgroundColor={"#344563"}
                        postUrl="./assets/img/16.jpg"
                        
                        userId="1"
                        userUrl="Profile?id=1"
                        userImage="./assets/img/1.jpg"
                        userNameSurname="Olga Sukhorukova"
                        colorUserNameSurname="aliceblue"
                        fontSizeUserNameSurname="14px"
                        fontWeightUserNameSurname="900"

                        Time="12 saat önce"
                        colorTime="aliceblue"
                        fontSizeTime="12px"
                        fontWeightTime="400"

                        liked="true"
                        likeOnClick={()=> { alert("beğenildi") } }
                        countLiked="300"
                        colorLike="aliceblue"
                        fontSizeLike="12px"
                        fontWeightLike="400"

                        commentOnClick={()=> { alert("yorum yap") } }
                        countComment="200"
                        colorComment="aliceblue"
                        fontSizeComment="12px"
                        fontWeightComment="400"

                        visibilityOnClick={()=> { alert("Görüntüleyenler") } }
                        countVisibility="100"
                        colorVisibility="aliceblue"
                        fontSizeVisibility="12px"
                        fontWeightVisibility="400"

                        shareOnClick={()=> { alert("paylaş") } }
                        deleteOnClick={()=> { alert("Sil") } }                           
                      />
                    </div>
                   
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
