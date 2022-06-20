import { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import WidgetInfo from '../../components/widgetsInfo';
import WidgetCardData from '../../components/widgetCardData'; 
import WidgetValue from "../../components/widgetValue";
import WidgetControl from "../../components/widgetControl";
import WidgetAddCard from "../../components/widgetAddCard";
import WidgetCategories from "../../components/widgetCategories";
import "./index.css";

//! icon
import BatteryFullIcon from '@material-ui/icons/BatteryFull'; 
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WifiIcon from '@material-ui/icons/Wifi';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


function Index() {

     //! State
     const [ widgetControlStatus , setWidgetControlStatus] = useState(false);
     const [ widgetControlStatus1 , setWidgetControlStatus1] = useState(false);

          
     const JsonData = [
       {
          "title":"Toplam Dosyalar",
          "content":"Sayısı: 1451 / 1 TB 200 GB 150 MB 100 KB",
          "icon": <AttachFileIcon style={{ fontSize:"20px"}}/>,
          "onClick":()=> { alert("Toplam Dosyalar"); }
       },
       {
          "title":"Toplam Fotoğraflar",
          "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
          "icon": <PhotoLibraryIcon style={{ fontSize:"20px"}}/>,
          "onClick":()=> { alert("Toplam Fotoğraflar"); }
        },
        {
          "title":"Toplam Videolar",
          "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
          "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
          "onClick":()=> { alert("Toplam Videolar"); }
        }
   ];
    
  return (
        <div className='widgets'>
               <Sidebar/>
               <div className="widgetsHome">
                    <Navbar />
                    <div className="widgetsContainer">
                     <h1> Widget: widgetInfo </h1>
                    <div style={{ display:"flex",gap:"10px"}}>
                            <WidgetInfo userId={"15"}
                                   userAvatar={"./assets/img/1.jpg"}
                                   userStatus={true}
                                   username={"username1"}
                                   nameSurname={"Olga Sukhorukova"}
                                   country={"Turkiye"}
                                   city={"Ankara"}
                                   dateofBirth={"17-03-1998"}
                                   created_at={"2022-06-19T13:56:51+03:00"}
                                   userActive={true}
                                   onlineTime={"22gun/8ay/2yıl 13sa:39dak:44sn:900ms"}
                            />
                                                 
                            <WidgetInfo userId={"657"}
                                   userAvatar={"./assets/img/2.jpg"}
                                   userStatus={false}
                                   username={"username2"}
                                   nameSurname={"Teresa McCall"}
                                   country={"Turkiye"}
                                   city={"Ankara"}
                                   dateofBirth={"17-03-1998"}
                                   created_at={"2022-06-19T13:56:51+03:00"}
                                   userActive={false}
                                   onlineTime={"22gun/8ay/2yıl 13sa:39dak:44sn:900ms"}
                            />   
                     </div>

                     <h1 style={{marginTop:"15px"}}> Widget: widgetCardData </h1>
                     <div style={{ width:"720px", display:"flex", gap:"10px"}}>
                            <WidgetCardData
                                   icon={<BatteryFullIcon style={{ fontSize:"50px"}} />}
                                   title={"Battery Health"}
                                   value={"99 %"}
                                   onlineStatus={true}
                            />
                            <WidgetCardData
                                   icon={<WbSunnyIcon style={{ fontSize:"50px"}} />}
                                   title={"Aydınlık Seviyesi"}
                                   value={"99 %"}
                                   onlineStatus={false}
                            />
                     </div>

                     <h1 style={{marginTop:"15px"}}> Widget: widgetValue </h1>
                     <div style={{ width:"610px", display:"flex", gap:"10px" }}>
                            <WidgetValue
                             title={"Mutfak Odası"}
                             type={"Sıcaklık"}
                             onlineStatus={true}
                             valueColor={"red"}
                             value={"21"}
                             valueKey={"°C"}
                            />

                            <WidgetValue
                             title={"Yemek Odası"}
                             type={"Nem"}
                             onlineStatus={true}
                             valueColor={"blue"}
                             value={"45"}
                             valueKey={"%"}
                            />

                     </div>
                     <h1 style={{marginTop:"15px"}}> Widget: widgetControl </h1>
                     <div style={{ width:"610px", display:"flex", gap:"10px" }}>
                            <WidgetControl
                                   title={"Wifi"}
                                   icon={<WifiIcon style={{ fontSize:"70px",opacity:"0.3" }}/>}
                                   status={widgetControlStatus}
                                   setStatus={setWidgetControlStatus}
                                   onlineStatus={false}
                                   onClick={()=> {alert("tiklama wifi")}}
                            />
                            <WidgetControl
                                   title={"Lamba"}
                                   icon={<EmojiObjectsIcon style={{ fontSize:"70px",opacity:"0.3" }}/>}
                                   status={widgetControlStatus1}
                                   setStatus={setWidgetControlStatus1}
                                   onlineStatus={true}
                                   onClick={()=> {alert("tiklama lamba")}}
                            />
                     </div>

                     <h1 style={{marginTop:"25px"}}> Widget: widgetAddCard </h1>
                     <div style={{ width:"300px", display:"flex", gap:"10px" }}>
                            <WidgetAddCard 
                               title="Yeni Cihaz"
                               onClick={()=> {alert("yeni")}}
                             />
                     </div>

                     
                     <h1 style={{marginTop:"45px"}}> Widget: widgetCategories </h1>
                     <div style={{ width:"450px", display:"flex", gap:"10px" }}>
                             <WidgetCategories 
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
