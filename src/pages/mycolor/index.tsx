import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css"

function Index() {
    
  return (
        <div className='myColor'>
               <Sidebar/>
               <div className="myColorHome">
                    <Navbar />
                    <div className="myColorContainer">
                           <p>  myColor </p>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
