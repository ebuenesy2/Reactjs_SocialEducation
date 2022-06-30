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
import NoteIcon from '@material-ui/icons/Note';
import PersonIcon from '@material-ui/icons/Person';

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

const JsonDataApi = [
    {
      "id":1,
      "table": "user",
      "title": "user_update_successful",
      "description": "Kullanıcı Güncelleme Başarılı",
      "logStatus": "success",
      "created_at": "2022-06-19T18:18:08+03:00"
    },
    {
      "id":2,
      "table": "file",
      "title": "file_add_successful",
      "description": "Dosya Ekleme Başarılıı",
      "logStatus": "success",
      "created_at": "2022-06-30T06:42:19+03:00"
    },
    {
      "id":3,
      "table": "note",
      "title": "note_add_successful",
      "description": "Not Ekleme Başarılı",
      "logStatus": "success",
      "created_at": "2022-06-30T06:43:50+03:00"
    }
];

const IconCssJson =[
      {
         "table": "user",
         "icon": <PersonIcon style={{ fontSize:"20px"}}/>,
         "backgroundColor":"rgb(76, 175, 80)",
         "onClick":()=> { alert("Toplam user"); }
      },
      {
         "table": "note",
         "icon": <NoteIcon style={{ fontSize:"20px"}}/>,
         "backgroundColor":"rgb(244, 67, 53)",
         "onClick":()=> { alert("Toplam note"); }
      },
      {
          "table": "file",
          "icon": <AttachFileIcon style={{ fontSize:"20px"}}/>,
          "backgroundColor":"rgb(26, 115, 232)",
          "onClick":()=> { alert("Toplam file"); }
      }
]



function Index() {


      useEffect(() => {
           // console.log("Başlangiç");
           // console.log("JsonDataApi:",JsonDataApi);
           // console.log("IconCss:",IconCss);
      }, []);

      const [productsCount, setProductsCount] = useState<[]>([])
      const [productsData, setProductsData] = useState<any[]>([])

      const apiGet = () => {  console.log("api");
            const apiUrl_table=ApiUrl.localApi+"/api/logs/all";
            //console.log("apiUrl_table:",apiUrl_table);
            
            axios.get(apiUrl_table)
            .then(response => {
      
                  //! State
                  setProductsCount(response.data.onlineCount);
                  setProductsData(response.data.DB);

                  console.log("response:",response);
                 //      console.log("data:",response.data);
                 // console.log("onlineCount:",response.data?.table);
                  
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
                                    
                                        IconCssJson={IconCssJson}
                                        JsonData={productsData}
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
                               
                                    {IconCssJson.find(el =>el.table === 'user')?.icon}

                                    <div style={{ width:"100px", height:"100px",  backgroundColor:IconCssJson.find(el =>el.table === 'user')?.backgroundColor }}>  Kutu </div>
                                    
                                    {
                                          IconCssJson.map((data:any)=>{
                                                return(
                                                      <>
                                                         <div> {data?.table} </div>
                                                         <div> {data?.backgroundColor} </div>
                                                      </>
                                                )
                                          })
                                    }
                                  

                               </div>
                            </div> 
                           
                          </div>

                    </div>
               </div>
        </div>
    
  )
}

export default Index;