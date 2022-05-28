import "./index.css"
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FaceIcon from '@material-ui/icons/Face';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AlarmIcon from '@material-ui/icons/Alarm';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';


export const Index =(props: any) => {  //console.log("proops:",props);
  
    let data;

    switch(props.type) {
       case "user":
        data = {
            title: "Kullanıcılar",
            linkName:"See Link Name",
            linkUrl: "./linkUrl",
            icon: <PersonOutlineOutlinedIcon className="icon" style={{ color:"#495057" , backgroundColor:"#feddc7"}} />
       };
       break;

       case "teachers":
        data = {
            title: "Öğretmenler",
            linkName:"See Link Name",
            linkUrl: "./linkUrl",
            icon: <FaceIcon className="icon" style={{ color:"#495057" , backgroundColor:"#65d2e4"}} />
       };
       break;

       case "advertisers":
        data = {
            title: "Reklam Verenler",
            linkName:"See Link Name",
            linkUrl: "./linkUrl",
            icon: <ImportContactsIcon className="icon" style={{ color:"#495057" , backgroundColor:"#dab6fc"}} />
       };
       break;

       case "sponsors":
        data = {
            title: "Sponsorlar",
            linkName:"See Link Name",
            linkUrl: "./linkUrl",
            icon: <BlurCircularIcon className="icon" style={{ color:"black" , backgroundColor:"darkseagreen"}} />
       };
       break;

       case "totallessonhours":
        data = {
           title: "Toplam Yapılan Ders Saati",
           linkName:"See Link Name",
           linkUrl: "./linkUrl",
           icon: <AlarmIcon className="icon" style={{ color:"#495057" , backgroundColor:"#d0e1fd"}} />
       };
       break;

       default:
         break;
    }

    
  return (
        <div className='widget'>
            <div className="left" > 
                <span className="title"> {data?.title} </span>
                <span className="counter">  {props.counter ?  props.counter : "0"} </span>
                <div className="onlinePanel">
                  <span className="onlineCountTitle" > Online Sayısı: </span>
                    <span className="onlineCount" >   {props.onlineCount ?  props.onlineCount : "0"}  </span>
                </div>
                <a className="link" href={data?.linkUrl} > {data?.linkName} </a>
            </div>
            <div className="right"> 
                 <div className={props.status=="negative" ? "percentafe negative" : "percentafe positive"} > 
                    {props.status=="negative" ? <KeyboardArrowDownIcon /> :   <KeyboardArrowUpOutlinedIcon /> }
                    {props.statusCount}
                 </div>
                 <div className="iconBox">  {data?.icon} </div>
            </div>
        </div>
    
  )
}

export default Index;
