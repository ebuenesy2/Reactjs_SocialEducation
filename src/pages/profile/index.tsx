import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

import WidgetFileUpload from "../../components/widgetFileUpload";

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
                            <div style={{ width:"450px", height:"700px" }}> 
                              <WidgetFileUpload
                                apiUrl={"http://localhost:3002/api/file/upload"}  
                              />
                            </div>
                        </div>
                   
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
