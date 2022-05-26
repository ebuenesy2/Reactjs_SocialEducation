import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

//! Timeline
import TimeLine from '../../components/timeline';


function Index() {
    
  return (
        <div className='logs'>
               <Sidebar/>
               <div className="logsHome">
                    <Navbar />
                    <div className="logsContainer">
                          
                          <div className="timeLineBox">
                                 <TimeLine />
                          </div>

                    </div>
               </div>
        </div>
    
  )
}

export default Index;
