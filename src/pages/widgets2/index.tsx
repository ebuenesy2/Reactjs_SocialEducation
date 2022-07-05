import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

import WidgetToggleButton from "../../components/widgetToggleButton";
import "./index.css"

function Index() {

  useEffect(() => {
    //console.log("Profile");
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
        <div className='widgets2'>
               <Sidebar/>
               <div className="widgets2Home">
                    <Navbar />
                    <div className="widgets2Container">
                       <h1> Widget: widgetToggleButton </h1>
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
    
  )
}

export default Index;
