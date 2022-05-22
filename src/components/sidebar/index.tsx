import "./index.css"
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import StoreIcon from '@material-ui/icons/Store';
import PaymentIcon from '@material-ui/icons/Payment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import SettingsIcon from '@material-ui/icons/Settings';

function Index() {
    
  return (
        <div className='sidebar'>
             <div className="top">
                <span className="logo"> SocialEducation </span>
             </div>
             <hr />
             <div className="center">
                <ul>
                   <p className="title">  MAIN</p>
                   <li>
                     <a href="/">
                        <DashboardIcon className="icon"/>
                        <span> Dashboard </span>
                     </a>
                   </li>

                   <p className="title">  LISTS</p>
                   <li>
                     <a href="/#">
                        <PersonIcon className="icon" />
                        <span> USERS </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <StoreIcon className="icon" />
                        <span> Products </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <PaymentIcon className="icon" />
                        <span> Orders </span>
                     </a>
                   </li>

                   <p className="title">  USEFUL</p>
                   <li>
                     <a href="/#">
                        <NotificationsIcon className="icon" />
                        <span> Notifications </span>
                     </a>
                   </li>
                   <li>
                     <a href="/message">
                        <MailOutlineIcon className="icon" />
                        <span> Messages </span>
                     </a>
                   </li>

                   <p className="title">  SERVICE</p>
                   <li>
                     <a href="/#">
                        <SettingsSystemDaydreamIcon className="icon" />
                        <span> System Health </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <SettingsBrightnessIcon className="icon" />
                        <span> Logs </span>
                     </a>                     
                   </li>
                   <li>
                     <a href="/#">
                        <SettingsIcon className="icon" />
                        <span> Settings </span>
                     </a>
                   </li>
                  

                </ul>
             </div>
             <div className="bottom">
                  <div className="colorOptions"></div>
                  <div className="colorOptions"></div>
                  <div className="colorOptions"></div>
             </div>
        </div>
    
  )
}

export default Index;
