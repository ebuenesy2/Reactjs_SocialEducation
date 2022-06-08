import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import WidgetInfo from '../../components/widgetsInfo';
import "./index.css";

function Index() {    
  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                         <WidgetInfo type="online" />
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
