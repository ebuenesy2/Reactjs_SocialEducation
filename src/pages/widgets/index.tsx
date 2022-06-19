import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import WidgetInfo from '../../components/widgetsInfo';
import WidgetCardData from '../../components/widgetCardData'; 
import "./index.css";

import BatteryFullIcon from '@material-ui/icons/BatteryFull'; //! icon
import WbSunnyIcon from '@material-ui/icons/WbSunny';

function Index() {
    
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
                                   OnlineStatus={true}
                            />
                            <WidgetCardData
                                   icon={<WbSunnyIcon style={{ fontSize:"50px"}} />}
                                   title={"Aydınlık Seviyesi"}
                                   value={"99 %"}
                                   OnlineStatus={true}
                            />
                     </div>

                    </div>
               </div>
        </div>
    
  )
}

export default Index;
