import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css"

function Index() {
    
  return (
        <div className='settings'>
               <Sidebar/>
               <div className="settingsHome">
                    <Navbar />
                    <div className="settingsContainer">
                           <p>  Setting </p>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
