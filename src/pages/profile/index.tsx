import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

import WidgetFileTimeLine from "../../components/widgetFileTimeLine";


function Index() {    
    
  useEffect(() => {
    //console.log("Profile");
  }, [])


  



  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                   
                        <div style={{ display:"flex", gap:"5px" }}>
                            <div style={{ width:"450px", height:"400px" }}> 
                                <WidgetFileTimeLine
                                   backgroundColor={"#F1F1F1"}
                                />
                            </div>
                        </div>
                   
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
