import "./index.css";
import axios from "axios"; //! Axios

//! TimeLine
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


//! Metariul
import Alert from '@material-ui/lab/Alert';

//! İcon
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { useEffect, useState } from "react";



//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {
  console.log("props:",props);

  const [productsCount, setProductsCount] = useState<[]>([])
  const [productsData, setProductsData] = useState<any[]>([])


  const apiGet = () => {  console.log("api");
    const apiUrl_table=process.env.REACT_APP_API_URL+"/api/logs/all";
    //console.log("apiUrl_table:",apiUrl_table);
    
    axios.get(apiUrl_table)
      .then(response => {

        //! State
        setProductsCount(response.data.onlineCount);
        setProductsData(response.data.DB);

        console.log("Data:",response.data);
        
          
      })
      .catch(error => {  console.log("Api Error:",error.message); });
    
  };

  useEffect(() => { apiGet();  }, []);


  useEffect(() => {
    const userId= 0;
    const socket = new WebSocket('ws://localhost:3002/socket/'+userId);  // Url

    socket.onopen = function () {
      //alert("Connect");
      console.log("Opening a connection...");

      const jsonVeri = JSON.stringify({
           toAll:true,
           toUserId:null,
           dataType: "Time",
           dataTypeTitle: "time_add_successful",
           dataTypeDescription: "Zaman Görüntüleme Başladı",
           dataId: 0,
           data:null,
           pageTable:"log",
           pageToken: "logToken"
       })

       socket.send(jsonVeri);   


    //! Gelen Bildirim
    socket.addEventListener('message', function (event) {
           //console.log('Message from server ', event.data);

           //! Veri Alma
           let geleData = event.data;
           const obj = JSON.parse(geleData);
           

           //Return Log
           console.log("obj:",obj);

         // Bağlantı Bilgileri
           if(obj.dataType == "Connect" &&  obj.fromUserID == userId ) { 
                  //console.log("Bağlantı Durumu:",obj.dataTypeDescription);
            }
           if( obj.dataType == "Time" && obj.dataTypeTitle =="time_add_successful" ) { console.log("objConnectCount:",obj.count); apiGet();  }
           if( obj.dataType == "Connect" && obj.dataTypeTitle =="disConnect" ) { console.log("objConnectCount:",obj.count); apiGet();  }
        // Bağlantı Bilgileri Son

    });
    //! Gelen Bildirim Son

    };
    socket.onclose = function (evt) {
      alert("Socket has been closed");
      console.log("Socket has been closed");
    };
    socket.onmessage = function (evt:any) {
      // handle messages here
    };
    socket.onerror = function (evt:any) {
       console.log("ERR: " + evt.data);
    };
    
}, []);

    
  return (
        <div className='list'>

          <VerticalTimeline>

            {productsData.map((que,i) => 
                  <>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date= {Moment(que?.created_at).format('DD-MM-YYYY - HH:mm:ss') }
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<PersonIcon />}
                        >

                        <div className="timeLineContainer">
                              
                              <Alert variant="filled" severity={que?.logStatus}> {que?.description} </Alert>
                        
                              <div className="logLocation">
                              <VisibilityIcon className="visibility" />
                              <a className="table"> {que?.table} </a>
                              <a className="title"> {que?.title} </a>
                              </div>
                              <div className="logIdPanel">
                                    <FingerprintIcon />
                                    <div className="logId"> {que?.id} </div>
                              </div>
                        

                              <a className="created_byPanel"  href={'user/' + que?.id}>
                                    <PersonIcon /> 
                                    <p className="created_byNameSurname"> {que?.created_byUserNameSurname}  </p>
                              </a>
                        </div>
                        
                        </VerticalTimelineElement>

                  </>                   
            )}

           
             
          </VerticalTimeline> 
        
        </div>
    
  )
}


export default Index;
