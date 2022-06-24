import "./index.css";
import EjectIcon from '@material-ui/icons/Eject';



//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  
   console.log("props:",props);
   console.log("created_at:",props.created_at);
   console.log("Moment:",Moment(props.created_at).format('L'));
   console.log("Moment:",Moment(props.created_at).format('LTS'));


    
  return (
        <div className='widgetCardDataTimeLine'>
           <div className="widgetCardDataTimeLineContainer">
              <div className="widgetCardDataTimeLineBox">
                 <div className="widgetCardDataTimeLineDetailTitle" > Tüm Veriler TimeLine </div>
               <div className="widgetCardDataTimeLineDetailBox">
                  <EjectIcon style={{ color: "darkgreen" }} />
                  <span className="widgetCardDataTimeLineDetailBoxDescription"> 30 % </span>
                  <span className="widgetCardDataTimeLineDetailBoxContent"> this month </span>
               </div>

               <div className="widgetCardDataTimeLineBottom" >

                  {Array(props.JsonData.length).fill(0).map((el, i) => 
                     <div className="widgetCardDataTimeLineBottomBox">
                        <div className="widgetCardDataTimeLineBottomIconBox"> {props.JsonData[i].icon} </div>
                     <div className="widgetCardDataTimeLineBottomInfoBox">
                         <div className="widgetCardDataTimeLineBottomInfoBoxTitle"> {props.JsonData[i].title} </div>
                         <div className="widgetCardDataTimeLineBottomInfoBoxDescription"> {props.JsonData[i].content} </div>
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
