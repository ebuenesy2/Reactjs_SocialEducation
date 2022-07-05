import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";


import WidgetFileCard  from "../../components/widgetFileCard";


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
                            <div style={{ width:"300px" }}> 
                              <WidgetFileCard
                                value={"60"}
                                maxValue={"100"}
                              />
                            </div>
                        </div>
                   
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
