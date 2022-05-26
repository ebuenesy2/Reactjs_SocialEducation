import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Timeline from "../../components/timeline";
import "./index.css"

function Index() {
    
  return (
        <div className='logs'>
               <Sidebar/>
               <div className="logsHome">
                    <Navbar />
                    <div className="logsContainer">
                          
                          <div className="timeLineBox">
                                     <Timeline />
                          </div>

                    </div>
               </div>
        </div>
    
  )
}

export default Index;
