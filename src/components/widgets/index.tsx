import "./index.css"
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LanguageIcon from '@material-ui/icons/Language';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommentIcon from '@material-ui/icons/Comment';

export const Index =(props: any) => {  //console.log("proops:",props);
  
    let data;

    switch(props.type) {
       case "onlineUser":
        data = {
           title: "Online Connect",
           linkName:"See Link Name",
           linkUrl: "./linkUrl",
           icon: <LanguageIcon className="icon" style={{ color:"#495057" , backgroundColor:"#d0e1fd"}} />
       };
       break;
       case "user":
        data = {
            title: "Users",
            linkName:"See Link Name",
            linkUrl: "./linkUrl",
            icon: <PersonOutlineOutlinedIcon className="icon" style={{ color:"#495057" , backgroundColor:"#feddc7"}} />
       };
       break;
       case "revenue":
        data = {
            title: "Revenue",
            linkName:"See Link Name",
            linkUrl: "./linkUrl",
            icon: <AccountBalanceWalletIcon className="icon" style={{ color:"#495057" , backgroundColor:"#65d2e4"}} />
       };
       break;
       case "orders":
        data = {
            title: "Orders",
            linkName:"See Link Name",
            linkUrl: "./linkUrl",
            icon: <ShoppingCartIcon className="icon" style={{ color:"#495057" , backgroundColor:"#dab6fc"}} />
       };
       break;
       case "commets":
        data = {
            title: "Comments",
            linkName:"See Link Name",
            linkUrl: "./linkUrl",
            icon: <CommentIcon className="icon" style={{ color:"black" , backgroundColor:"darkseagreen"}} />
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
