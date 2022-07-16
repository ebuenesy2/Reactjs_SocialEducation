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
                                backgroundColor={"#F1F1F1"}

                                title={"File Upload Api"}
                                colorTitle={"#6990f2"}
                                fontSizeTitle={"27px"}
                                fontWeightTitle={"600"}

                                uploadTitle={"Dosyanızı buraya sürekleyiniz veya bilgisayardan seçiniz.."}
                                colorUploadTitle={"#344563"}
                                fontSizeUploadTitle={"15px"}
                                fontWeightUploadTitle={"700"}
                
                                apiUrl={"http://localhost:3002/api/file/upload"}  
                                postRole={"role admin"}
                                postUsedPage={"admin"}
                                postCreated_byToken={"created_byToken"}
                              />
                            </div>
                        </div>
                   
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
