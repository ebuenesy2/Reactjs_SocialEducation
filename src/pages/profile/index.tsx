import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

import WidgetCardDataTimeLine from "../../components/widgetCardDataTimeLine";

//! İcon
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
          }
          
     ];

     
     

  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                        
                           <div style={{ width:"450px", display:"flex", gap:"10px" }}>
                             <WidgetCardDataTimeLine 
                                backgroundColor={"#F1F1F1"}
                                title={"Tüm Veriler"}
                                JsonData={JsonData}
                              />
                          </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
