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
                      <DashboardIcon className="icon"/>
                      <span> Dashboard </span>
                   </li>

                   <p className="title">  LISTS</p>
                   <li>
                      <PersonIcon className="icon" />
                      <span> USERS </span>
                   </li>
                   <li>
                      <StoreIcon className="icon" />
                      <span> Products </span>
                   </li>
                   <li>
                      <PaymentIcon className="icon" />
                      <span> Orders </span>
                   </li>

                   <p className="title">  USEFUL</p>
                   <li>
                      <NotificationsIcon className="icon" />
                      <span> Notifications </span>
                   </li>
                   <li>
                      <MailOutlineIcon className="icon" />
                      <span> Messages </span>
                   </li>

                   <p className="title">  SERVICE</p>
                   <li>
                      <SettingsSystemDaydreamIcon className="icon" />
                      <span> System Health </span>
                   </li>
                   <li>
                      <SettingsBrightnessIcon className="icon" />
                      <span> Logs </span>
                   </li>
                   <li>
                      <SettingsIcon className="icon" />
                      <span> Settings </span>
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
