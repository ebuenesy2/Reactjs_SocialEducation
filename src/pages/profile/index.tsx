import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";


import WidgetCardChart from "../../components/widgetCardChart";

//! icon
import BatteryFullIcon from '@material-ui/icons/BatteryFull'; 



function Index() {    
    
  useEffect(() => {
    console.log("Profile");
  }, [])
  


  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                   
                        <div style={{ display:"flex", gap:"5px" }}>
                            <div style={{ width:"1055px" }}> 
                            
                            </div>
                        </div>
                   
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
