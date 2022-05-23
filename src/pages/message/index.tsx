import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css"

//! icon
import ForumIcon from '@material-ui/icons/Forum';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GroupIcon from '@material-ui/icons/Group';

function Index() {
    
  return (
        <div className='message'>
               <Sidebar/>
               <div className="messageHome">
                    <Navbar />
                    <div className="messageContainer">
                        <div className="messageContainerLeft">
                            <div className="messageContainerLeftIconBox">
                                  <div className="messageContainerLeftIcon"> <ForumIcon className="icon" /> </div>
                                  <div className="messageContainerLeftIcon"> <AssignmentIndIcon className="icon" /> </div>
                                  <div className="messageContainerLeftIcon"> <ContactMailIcon className="icon" /> </div>
                                  <div className="messageContainerLeftIcon"> <GroupIcon className="icon" /> </div>
                            </div>
                            <div className="messageContainerLeftTitle"> Chats</div>
                        </div>
                        <div className="messageContainerRight">
                            <div className="messageContainerRightTop">
                                <div className="messageContainerRightTopProfileInfo">
                                      <img className="avatar" src="./assets/img/1.jpg"  alt="" />
                                </div>
                             </div>
                        </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
