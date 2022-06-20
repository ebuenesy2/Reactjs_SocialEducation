import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

import WidgetControl from "../../components/widgetControl";

import WifiIcon from '@material-ui/icons/Wifi';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

function Index() {    


     useEffect(() => { 
        
            //! http://localhost:3000/Profile?id=1
            let key_value= window.location.search; //! ?id=1
            //console.log("key_value:",key_value);


            let urlParams = new URLSearchParams(key_value); //! 1
            let urlParams_id = urlParams.get('id');
            
            //console.log("urlParams_id:",urlParams_id);
           
     }, []);

     //! State
     const [ widgetControlStatus , setWidgetControlStatus] = useState(false);
     const [ widgetControlStatus1 , setWidgetControlStatus1] = useState(false);
     

  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                          
                          <p> widgetControlStatus: {widgetControlStatus == true ? "True": "False"} </p>
                          <div style={{ width:"610px", display:"flex", gap:"10px" }}>
                            <WidgetControl
                               title={"Wifi"}
                               icon={<WifiIcon style={{ fontSize:"70px",opacity:"0.3" }}/>}
                               status={widgetControlStatus}
                               setStatus={setWidgetControlStatus}
                               onlineStatus={false}
                            />
                             <WidgetControl
                               title={"Lamba"}
                               icon={<EmojiObjectsIcon style={{ fontSize:"70px",opacity:"0.3" }}/>}
                               status={widgetControlStatus1}
                               setStatus={setWidgetControlStatus1}
                               onlineStatus={true}
                            />
                          </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
