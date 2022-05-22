import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css"

function Index() {
    
  return (
        <div className='message'>
               <Sidebar/>
               <div className="messageHome">
                    <Navbar />
                    <div className="messageContainer">
                        <p>  Deneme </p>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
