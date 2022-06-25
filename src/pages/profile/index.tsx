import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

import WidgetControl from "../../components/widgetControl";

//! İcon
import BatteryFullIcon from '@material-ui/icons/BatteryFull'; 
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
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

     
    //! State
    const [ widgetControlStatus , setWidgetControlStatus] = useState(false);
     

  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                        
                           <div style={{ width:"200px" }}>
                            <WidgetControl
                              title={"Lamba"}
                              colorTitle={"white"}
                              fontSizeTitle={"40px"}
                              fontWeightTitle={"700"}
                              
                              icon={<EmojiObjectsIcon style={{ fontSize:"70px" }}/>}
                              status={widgetControlStatus}
                              setStatus={setWidgetControlStatus}
                              
                              onlineStatus={false}
                              fontSizeStatus={"14px"}
                              fontWeightStatus={"700"}
                              
                              onClick={()=> {alert("tiklama lamba")}}
                            />
                          </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
