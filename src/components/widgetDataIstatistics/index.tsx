import "./index.css"
import EjectIcon from '@material-ui/icons/Eject';





export const Index =(props: any) => {  //console.log("proops:",props);
  
 


    
  return (
        <div className='widgetDataIstatistics'>
            <div className="left" > 
                <span className="title"> Title </span>
                <span className="counter">  10 </span>
                <div className="onlinePanel">
                  <span className="onlineCountTitle" > Online Sayısı: </span>
                    <span className="onlineCount" >   1  </span>
                </div>
                <a className="link" href={"url"} > Link </a>
            </div>
            <div className="right"> 
                <div className="widgetDataIstatisticsStatus">
                  <div className="widgetDataIstatisticsStatusArrow">                      
                   <EjectIcon className={props.status==="negative" ? "widgetDataIstatisticsStatusStatus negative" : "widgetDataIstatisticsStatusStatus"} /> 
                   <span  className={props.status==="negative" ? "widgetDataIstatisticsStatusDescription negative" : "widgetDataIstatisticsStatusDescription"}  style={{ fontSize: props.fontSizeDetailDescription ? props.fontSizeDetailDescription : "16px", fontWeight:props.fontWeightDetailDescription ? props.fontWeightDetailDescription : "700"  }} > {props.titleDetailDescription ? props.titleDetailDescription : "0%"} </span>
                </div>
                <span className="widgetDataIstatisticsStatusContent" style={{ color: props.colorDetailContent ? props.colorDetailContent : "black", fontSize: props.fontSizeDetailContent ? props.fontSizeDetailContent : "16px", fontWeight:props.fontWeightDetailContent ? props.fontWeightDetailContent : "700"  }} > {props.titleDetailContent ? props.titleDetailContent : "This Month"} </span>
               </div>

                 <div className="iconBox">  {props.icon} </div>
            </div>
        </div>
    
  )
}

export default Index;
