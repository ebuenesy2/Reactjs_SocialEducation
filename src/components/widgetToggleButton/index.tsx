import { useEffect, useState } from "react";
import "./index.css"

//! icon
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export const Index =(props: any) => {  //console.log("proops:",props);
  
   console.log("props:",props);


   //! State
   const [ count, setCount] = useState(4);
   const [ value, setValue] = useState(1);

   
  
   useEffect(() => {
      let width = document.getElementById("1")?.offsetWidth;
      let height = document.getElementById("1")?.offsetHeight;
      let left = document.getElementById("1")?.offsetLeft;
     
      //! CSS Variable Değeri Güncelliyor
      document.documentElement.style.setProperty('--width',  Number(width).toString()+'px');
      document.documentElement.style.setProperty('--height', Number(height).toString()+'px');
      document.documentElement.style.setProperty('--left', Number(left).toString()+'px' );

      setCount(4);
   }, [])

   const calculateValue=(id:any) => {
      let width = document.getElementById(id)?.offsetWidth;
      let height = document.getElementById(id)?.offsetHeight;
      let left = document.getElementById(id)?.offsetLeft;
     
      //! CSS Variable Değeri Güncelliyor
      document.documentElement.style.setProperty('--width',  Number(width).toString()+'px');
      document.documentElement.style.setProperty('--height', Number(height).toString()+'px');
      document.documentElement.style.setProperty('--left', Number(left).toString()+'px' );
    }


    
   return (
   <>
      <div className='widgetToggleButton'>
         <div className="widgetToggleButtonSelect"  >
               <div className={value === 1 ? "widgetToggleButtonArrow passive" : "widgetToggleButtonArrow"} onClick={() => { if (value !== 1) { let valueCalculator = value - 1; setValue(valueCalculator); calculateValue(valueCalculator); } }}    > <ArrowLeftIcon  style={{ fontSize:"30px" }} /> </div>
              
               <div id="1" className={value === 1 ? "widgetToggleButtonDescription active" : "widgetToggleButtonDescription passive"} onClick={() => { setValue(1); calculateValue(1); }}  >1</div>
               <div id="2" className={value === 2 ? "widgetToggleButtonDescription active" : "widgetToggleButtonDescription passive"} onClick={() => { setValue(2); calculateValue(2); }}  >2</div>
               <div id="3" className={value === 3 ? "widgetToggleButtonDescription active" : "widgetToggleButtonDescription passive"} onClick={() => { setValue(3); calculateValue(3); }}  >3</div>
               <div id="4" className={value === 4 ? "widgetToggleButtonDescription active" : "widgetToggleButtonDescription passive"} onClick={() => { setValue(4); calculateValue(4); }}  >4</div>
               
               <div className={value === count ? "widgetToggleButtonArrow passive" : "widgetToggleButtonArrow"} onClick={() => { if (value !== count) { let valueCalculator = value + 1; setValue(valueCalculator); calculateValue(valueCalculator); }  }}  > <ArrowRightIcon  style={{ fontSize:"30px"}} /> </div>
         </div>
      </div>
   </>
  )
}

export default Index;
