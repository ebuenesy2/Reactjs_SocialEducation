import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";


import WidgetToggleButton  from "../../components/widgetToggleButton";


function Index() {    
    
  useEffect(() => {
    console.log("Profile");
  }, [])


  
  const ToggleButtonJsonData = [
    { id:1, text:"1"},
    { id:2, text:"2"},
    { id:3, text:"3"},
    { id:4, text:"4"},
    { id:5, text:"5"},
    { id:6, text:"6"}
  ];


  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                   
                        <div style={{ display:"flex", gap:"5px" }}>
                            <div style={{ width:"380px" }}> 
                              <WidgetToggleButton
                                backgroundColor={"#F1F1F1"}
                                onClick={(index: any) => { /*  alert("tiklama");  */ console.log("index:", index);  }}  
                                JsonData={ToggleButtonJsonData}
                              />
                            </div>
                        </div>
                   
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
