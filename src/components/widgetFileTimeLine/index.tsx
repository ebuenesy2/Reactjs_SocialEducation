import "./index.css"

export const Index =(props: any) => {  //console.log("proops:",props);

return ( 
   <>
      <div className='widgetFileTimeLine'>
         <div className="widgetFileTimeLineContainer">
            <div className="widgetFileTimeLineTitle" > File TimeLines </div>
            <div className="widgetFileTimeLineDetails">
               
               <div className="widgetFileTimeLineBox" >
                  <div className="widgetFileTimeLineHeader">
                       <div className="widgetFileTimeLineHeaderBox"></div>
                       <div className="widgetFileTimeLineHeaderTitle">11:03</div>
                  </div>
                  <div className="widgetFileTimeLineImageBoxes" >
                     <div className="widgetFileTimeLineImageBox">
                        <img className="widgetFileTimeLineImage" src="./assets/img/1.jpg"  alt="" /> 
                        <img className="widgetFileTimeLineImage" src="./assets/img/2.jpg"  alt="" /> 
                        <img className="widgetFileTimeLineImage" src="./assets/img/3.jpg"  alt="" /> 
                        <img className="widgetFileTimeLineImage" src="./assets/img/4.jpg"  alt="" /> 
                        <img className="widgetFileTimeLineImage" src="./assets/img/5.jpg" alt="" /> 
                        
                        <div className="widgetFileTimeLineImageOpacity" >+210</div>

                     </div>
                     <div className="widgetFileTimeLineImageTitle" > 8 tane resim eklendi </div>
                  </div>
               </div>

               <div className="widgetFileTimeLineBox" >
                  <div className="widgetFileTimeLineHeader">
                       <div className="widgetFileTimeLineHeaderBox"></div>
                       <div className="widgetFileTimeLineHeaderTitle">12:03</div>
                  </div>
                  <div className="widgetFileTimeLineImageBoxes" >
                     <div className="widgetFileTimeLineImageBox">
                        <img className="widgetFileTimeLineImage" src="./assets/img/1.jpg"  alt="" /> 
                        <img className="widgetFileTimeLineImage" src="./assets/img/2.jpg"  alt="" /> 
                        <img className="widgetFileTimeLineImage" src="./assets/img/3.jpg"  alt="" /> 
                        <img className="widgetFileTimeLineImage" src="./assets/img/4.jpg"  alt="" /> 
                     </div>
                     <div className="widgetFileTimeLineImageTitle" > 4 tane resim eklendi </div>
                  </div>
               </div>

               <div className="widgetFileTimeLineBox" >
                  <div className="widgetFileTimeLineHeader">
                       <div className="widgetFileTimeLineHeaderBox"></div>
                       <div className="widgetFileTimeLineHeaderTitle">15:03</div>
                  </div>
                  <div className="widgetFileTimeLineImageBoxes" >
                     <div className="widgetFileTimeLineImageBox">
                        <img className="widgetFileTimeLineImage" src="./assets/img/7.jpg"  alt="" /> 
                        <img className="widgetFileTimeLineImage" src="./assets/img/8.jpg"  alt="" /> 
                        <img className="widgetFileTimeLineImage" src="./assets/img/9.jpg"  alt="" /> 
                     </div>
                     <div className="widgetFileTimeLineImageTitle" > 3 tane resim eklendi </div>
                  </div>
               </div>
                              
               <div className="widgetFileTimeLineBox" >
                  <div className="widgetFileTimeLineHeader">
                       <div className="widgetFileTimeLineHeaderBox"></div>
                       <div className="widgetFileTimeLineHeaderTitle">19:45</div>
                  </div>
                  <div className="widgetFileTimeLineImageBoxes" >
                     <div className="widgetFileTimeLineImageBox">
                        <img className="widgetFileTimeLineImage" src="./assets/img/14.jpg"  alt="" /> 
                        <img className="widgetFileTimeLineImage" src="./assets/img/15.jpg"  alt="" /> 
                        <img className="widgetFileTimeLineImage" src="./assets/img/16.jpg"  alt="" /> 
                     </div>
                     <div className="widgetFileTimeLineImageTitle" > 3 tane video eklendi </div>
                 </div>
               </div>
               
            </div>

         </div>
      </div>
   </>
     
  )
}

export default Index;
