import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css"

function Index() {
    
  return (
        <div className='timeline'>
               <Sidebar/>
               <div className="timelineHome">
                    <Navbar />
                    <div className="timelineContainer">
                           <p>  Sbit </p>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
