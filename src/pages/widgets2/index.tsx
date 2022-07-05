import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css"

function Index() {
    
  return (
        <div className='widgets2'>
               <Sidebar/>
               <div className="widgets2Home">
                    <Navbar />
                    <div className="widgets2Container">
                       <h1> Widget: widgetInfo 2 </h1>
                       <div style={{ width:"720px", display:"flex", gap:"10px"}}>
                            
                       </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
