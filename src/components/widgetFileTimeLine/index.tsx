import "./index.css"

//! icon
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export const Index =(props: any) => {  //console.log("widgetFileTimeLine Props:",props);

return ( 
   <>
      <div className='widgetFileTimeLine'>
         <div className="widgetFileTimeLineContainer">
            <div className="widgetFileTimeLineTitle" > File TimeLines </div>
               <div className="widgetFileTimeLineDetails">

                  {Array(props.JsonData.length).fill(0).map((el, i) => 
                     <div className="widgetFileTimeLineBox" >
                        <div className="widgetFileTimeLineHeader">
                           <div className="widgetFileTimeLineHeaderBox"></div>
                           <div className="widgetFileTimeLineHeaderTitle"> {props.JsonData[i].time} </div>
                        </div>
                        <div className="widgetFileTimeLineFileBoxesFlex" >
                           <div className="widgetFileTimeLineFileBoxes">

                              {Array(props.JsonData[i].data.length).fill(0).map((elj, j) => (  
                                 j <= 4 ?
                                    <div className="widgetFileTimeLineFileBox" >
                                       <img className="widgetFileTimeLineFile" src={props.JsonData[i].data[j].imgUrl} alt="" />
                                       {props.JsonData[i].data[j].type === "video" ?  <div className="widgetFileTimeLineFileOpacity" > <PlayArrowIcon /> </div>  :
                                       props.JsonData[i].data[j].type === "voice" ?  <div className="widgetFileTimeLineFileOpacity" > <MusicNoteIcon /> </div>  :
                                       j >= 4 ?  <div className="widgetFileTimeLineFileOpacity" > +{props.JsonData[i].data.length - 4} </div>  :
                                       <div></div> }
                                    </div>
                                 :<div></div> 

                           ))}

                           </div>
                           <div className="widgetFileTimeLineFileTitle" > {props.JsonData[i].description} </div>
                        </div>
                     </div>
                  )}
                  
               </div>
         </div>
      </div>
   </>
     
  )
}

export default Index;
