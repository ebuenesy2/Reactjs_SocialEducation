import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

import WidgetToggleButton from "../../components/widgetToggleButton";

import WidgetFileCard from "../../components/widgetFileCard";
import "./index.css"

//! icon
import ImageIcon from '@material-ui/icons/Image';

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
                     
                    <div style={{ marginTop:"20px" }}>
                        <h1> Widget: widgetFileCard </h1>
                        <div style={{ width:"300px" }}> 
                          <WidgetFileCard
                            backgroundColor={"#F1F1F1"}
            
                            widgetBoxColor={"#43B37A"}
                            widgetBoxWidth={"40px"}
                            widgetBoxHeight={"40px"}
                            icon={<ImageIcon style={{ fontSize: "30px", color: "#fff" }} />}
            
                            title={"Videolar"}
                            colorTitle={"#7E817C"}
                            fontSizeTitle={"10px"}
                            fontWeightTitle={"700"}

                            description={"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB"}
                            colorDescription={"#344563"}
                            fontSizeDescription={"10px"}
                            fontWeightDescription={"700"}
                            
                            colorValue={"#344563"}
                            fontSizeValue={"15px"}
                            fontWeightValue={"900"}
                                            
                            value={"71"}
                            maxValue={"80"}
                          />
                        </div>
                    </div>

          
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
