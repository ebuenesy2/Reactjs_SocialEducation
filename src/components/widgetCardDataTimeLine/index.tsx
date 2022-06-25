import "./index.css";
import { useEffect } from "react";
import EjectIcon from '@material-ui/icons/Eject';



//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
   
  
   useEffect( () => {
      console.log("Başladı");
    },[])


    
  return (
        <div className='widgetCardDataTimeLine' style={{ backgroundColor: props.backgroundColor ? props.backgroundColor : "azure"  }} >
           <div className="widgetCardDataTimeLineContainer">
              <div className="widgetCardDataTimeLineBox">
                 <div className="widgetCardDataTimeLineDetailTitle" style={{ color: props.colorTitle ? props.colorTitle : "black", fontSize: props.fontSizeTitle ? props.fontSizeTitle : "16px", fontWeight:props.fontWeightTitle ? props.fontWeightTitle : "700"  }} > {props.title ? props.title : "Title"} </div>
               <div className="widgetCardDataTimeLineDetailBox">
                   <EjectIcon className={props.status=="negative" ? "widgetCardDataTimeLineDetailBoxStatus negative" : "widgetCardDataTimeLineDetailBoxStatus"} /> 
                  <span  className={props.status=="negative" ? "widgetCardDataTimeLineDetailBoxDescription negative" : "widgetCardDataTimeLineDetailBoxDescription"}  style={{ fontSize: props.fontSizeDetailDescription ? props.fontSizeDetailDescription : "16px", fontWeight:props.fontWeightDetailDescription ? props.fontWeightDetailDescription : "700"  }} > {props.titleDetailDescription ? props.titleDetailDescription : "0%"} </span>
                  <span className="widgetCardDataTimeLineDetailBoxContent" style={{ color: props.colorDetailContent ? props.colorDetailContent : "black", fontSize: props.fontSizeDetailContent ? props.fontSizeDetailContent : "16px", fontWeight:props.fontWeightDetailContent ? props.fontWeightDetailContent : "700"  }} > {props.titleDetailContent ? props.titleDetailContent : "This Month"} </span>
               </div>

               <div className="widgetCardDataTimeLineBottom" >

                  {Array(props.JsonData.length).fill(0).map((el, i) => 
                     <div className="widgetCardDataTimeLineBottomBox">
                        <div className="widgetCardDataTimeLineBottomIconBox" style={{ background: props.JsonData[i].backgroundColor ? props.JsonData[i].backgroundColor : "red" }}> {props.JsonData[i].icon} </div>
                     <div className="widgetCardDataTimeLineBottomInfoBox">
                         <div className="widgetCardDataTimeLineBottomInfoBoxTitle" style={{ color: props.colorBoxTitle ? props.colorBoxTitle : "black", fontSize: props.fontSizeBoxTitle ? props.fontSizeBoxTitle : "16px", fontWeight:props.fontWeightBoxTitle ? props.fontWeightBoxTitle : "700"  }} > {props.JsonData[i].title} </div>
                         <div className="widgetCardDataTimeLineBottomInfoBoxDescription" style={{ color: props.colorBoxDescription ? props.colorBoxDescription : "black", fontSize: props.fontSizeBoxDescription ? props.fontSizeBoxDescription : "14px", fontWeight:props.fontWeightBoxDescription ? props.fontWeightBoxDescription : "400"  }} > {props.JsonData[i].content} </div>
                     </div>                   

                     </div>
                  )}

               </div>

              </div>
           </div>
        </div>
     
  )
}

export default Index;
