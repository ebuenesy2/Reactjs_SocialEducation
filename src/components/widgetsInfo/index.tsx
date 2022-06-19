import "./index.css"
import EditIcon from '@material-ui/icons/Edit';


//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  

    
  return (
        <div className='widgetInfo'>
         <div className="top"> Kullanıcı Bilgileri  <EditIcon className="icon" /> </div>
          <div className="topUser"> UserId: <p className="userId">12</p> </div>
          <hr/>
          
         <div className="bottom">
              <div className="bottomLeft"> 
                <img className="userAvatar" src="./assets/img/1.jpg"  alt="" />
                <div className="userStatus"> Online </div>
              </div>
              <div className="bottomRigth">
                <div className="username"> @username </div>
                <div className="nameSurname"> Olga Sukhorukova </div>
                <div className="registerName"> Ankara / Turkiye </div>
                <div className="registerName"> Doğum Tarihi:<div className="registerValue"> 17/03/1995</div> </div>
                
                <div className="registerName"> Kayıt Tarihi:<div className="registerValue">17/04/2024 - 04:25</div> </div>
                <div className="registerName"> Durum:<div className="registerValue" style={{ color: "green"}}>Active</div> </div>
                <div className="OnlineName">  1 yıl 11 ay 10 gün 9 saat 13 dk 12 sn</div>
              </div>
         </div>
               
        </div>
     
  )
}

export default Index;
