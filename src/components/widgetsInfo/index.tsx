import "./index.css"
import EditIcon from '@material-ui/icons/Edit';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  

    
  return (
        <div className='widgetInfo'>
           <div className="top">
                <div className="topTitle">
                    <RssFeedIcon className="icon" />
                    <div className="title">Online</div>
                </div>
                <EditIcon className="icon" />
           </div>
           <div className="middle">
                 <QueryBuilderIcon className="icon" />
                 <h1>  1545</h1>
                 <p> ms </p>
           </div>
           <div className="middleBottom">
              <p className="title"> Son Online Zamanı:</p>
              <p className="time"> {Moment('2022-05-20T11:47:26.329Z').format('DD-MM-YYYY HH:mm:ss')} </p> 
           </div>

           <div className="bottom">
              <div className="BottomIconGroup">
                     <HourglassEmptyIcon className="icon" />
                     <p> 98988789878 </p>
              </div>
           </div>
           
         
               
        </div>
    
  )
}

export default Index;
