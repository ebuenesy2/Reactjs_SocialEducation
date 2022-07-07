import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

import WidgetFileTimeLine from "../../components/widgetFileTimeLine";


function Index() {    
    
  useEffect(() => {
    //console.log("Profile");
  }, [])


  const FileTimelineJsonData = [
    {
      id: 1, time: "10:10", description: "8 tane resim yüklendi",
      data: [
        { id: 1, imgUrl: "./assets/img/1.jpg", type: "img", url: "./assets/img/1.jpg" },
        { id: 2, imgUrl: "./assets/img/2.jpg", type: "img", url: "./assets/img/2.jpg" },
        { id: 3, imgUrl: "./assets/img/3.jpg", type: "img", url: "./assets/img/3.jpg" },
        { id: 4, imgUrl: "./assets/img/4.jpg", type: "img", url: "./assets/img/4.jpg" },
        { id: 5, imgUrl: "./assets/img/5.jpg", type: "img", url: "./assets/img/5.jpg" },
        { id: 6, imgUrl: "./assets/img/6.jpg", type: "img", url: "./assets/img/6.jpg" },
        { id: 7, imgUrl: "./assets/img/7.jpg", type: "img", url: "./assets/img/7.jpg" },
        { id: 8, imgUrl: "./assets/img/8.jpg", type: "img", url: "./assets/img/8.jpg" }
      ]
    },
    {
      id: 2, time: "12:40", description: "3 tane resim yüklendi",
      data: [
        { id: 1, imgUrl: "./assets/img/10.jpg", type: "img", url: "./assets/img/10.jpg" },
        { id: 2, imgUrl: "./assets/img/12.jpg", type: "img", url: "./assets/img/12.jpg" },
        { id: 3, imgUrl: "./assets/img/13.jpg", type: "img", url: "./assets/img/13.jpg" }
      ]
    },    
    {
      id: 3, time: "15:45", description: "3 tane video yüklendi",
      data: [
        { id: 1, imgUrl: "./assets/img/15.jpg", type: "video", url: "./assets/img/15.jpg" },
        { id: 2, imgUrl: "./assets/img/16.jpg", type: "video", url: "./assets/img/16.jpg" },
        { id: 3, imgUrl: "./assets/img/17.jpg", type: "video", url: "./assets/img/17.jpg" }
      ]
    },
        
    {
      id: 4, time: "19:45", description: "4 tane ses yüklendi",
      data: [
        { id: 1, imgUrl: "./assets/img/18.jpg", type: "voice", url: "./assets/img/18.jpg" },
        { id: 2, imgUrl: "./assets/img/11.jpg", type: "voice", url: "./assets/img/11.jpg" },
        { id: 3, imgUrl: "./assets/img/13.jpg", type: "voice", url: "./assets/img/13.jpg" },
        { id: 4, imgUrl: "./assets/img/14.jpg", type: "voice", url: "./assets/img/14.jpg" }
      ]
    },

  ];



  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                   
                        <div style={{ display:"flex", gap:"5px" }}>
                            <div style={{ width:"450px", height:"700px" }}> 
                                <WidgetFileTimeLine
                                  backgroundColor={"#F1F1F1"}
                                  JsonData={FileTimelineJsonData}
                                />
                            </div>
                        </div>
                   
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
