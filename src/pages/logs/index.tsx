import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

//! Timeline


function Index() {
    
  return (
        <div className='logs'>
               <Sidebar/>
               <div className="logsHome">
                    <Navbar />
                    <div className="logsContainer">
                          
                          <div className="timeLineBox">
                              <h1> TimeLine </h1>
                          </div>

                    </div>
               </div>
        </div>
    
  )
}

export default Index;
