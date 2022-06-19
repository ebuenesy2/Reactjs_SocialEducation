import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";



function Index() {    


     useEffect(() => { 
        
            //! http://localhost:3000/Profile?id=1
            let key_value= window.location.search; //! ?id=1
            //console.log("key_value:",key_value);


            let urlParams = new URLSearchParams(key_value); //! 1
            let urlParams_id = urlParams.get('id');
            
            //console.log("urlParams_id:",urlParams_id);
           
     }, []);

     

  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">

                          <div style={{ width:"720px", display:"flex", gap:"10px" }}>
                              
                          </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;