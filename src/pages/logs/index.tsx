import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

//! Enum
import { ApiUrl } from "../../shared/Enum/Url";


//! Widget
import WidgetCardDataTimeLine from "../../components/widgetCardDataTimeLine";

//! icon
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


//! Data
const JsonData = [
      {
            "title":"Toplam Dosyalar",
            "content":"Sayısı: 1451 / 1 TB 200 GB 150 MB 100 KB",
            "icon": <AttachFileIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Dosyalar"); },
            "backgroundColor":"rgb(76, 175, 80)"
      },
      {
            "title":"Toplam Fotoğraflar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <PhotoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Fotoğraflar"); },
            "backgroundColor":"rgb(244, 67, 53)"
      },
      {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
      },
      {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
      },
      {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
      },
      {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
      },
      {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
      }
            
];



function Index() {


      useEffect(() => {
            console.log("Başlangiç");
      }, []);

      const [productsCount, setProductsCount] = useState<[]>([])
      const [productsData, setProductsData] = useState<any[]>([])

      const apiGet = () => {  console.log("api");
            const apiUrl_table=ApiUrl.localApi+"/api/user/all";
            //console.log("apiUrl_table:",apiUrl_table);
            
            axios.get(apiUrl_table)
            .then(response => {
      
                  //! State
                  setProductsCount(response.data.onlineCount);
                  setProductsData(response.data.DB);

                  console.log("response:",response);
                  console.log("data:",response.data);
                  console.log("onlineCount:",response.data.onlineCount);
                  
            })
            .catch(error => {  console.log("Api Error:",error.message); });
            
      };

      useEffect(() => { apiGet(); }, []);

  return (
        <div className='logs'>
               <Sidebar/>
               <div className="logsHome">
                    <Navbar />
                    <div className="logsContainer">
                          
                          <div className="timeLineBox">

                            <div style={{ display:"flex", gap:"10px" }} >
                               <div style={{ width:"450px" }}>
                                    <WidgetCardDataTimeLine 
                                        backgroundColor={"#F1F1F1"}
                                        colorTitle={"#344563"}
                                        title={"Tüm Veriler TimeLine"}
                                        fontSizeTitle={"16px"}
                                        fontWeightTitle={"700"}
                                        status={"positive"}
                                        titleDetailDescription={"20%"}
                                        fontSizeDetailDescription={"14px"}
                                        fontWeightDetailDescription={"400"}

                                        titleDetailContent={"Bu ay"}
                                        colorDetailContent={"#344563"}
                                        fontSizeDetailContent={"15px"}
                                        fontWeightDetailContent={"700"}
                                          
                                        JsonData={JsonData}
                                        colorBoxTitle={"#344563"}
                                        fontSizeBoxTitle={"14px"}
                                        fontWeightBoxTitle={"700"}
                                        colorBoxDescription={"#344563"}
                                        fontSizeBoxDescription={"12px"}
                                        fontWeightBoxDescription={"400"}
                                    />
                               </div>

                               <div>
                                    <p> Api: {ApiUrl.localApi}  </p>
                                 
                               </div>
                            </div> 
                           
                          </div>

                    </div>
               </div>
        </div>
    
  )
}

export default Index;
