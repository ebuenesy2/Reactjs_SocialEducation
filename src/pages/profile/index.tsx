import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";
import axios from 'axios'

import ProgressbarCirculer from "../../components/progressbarCirculer";



function Index() {    


     useEffect(() => { 
        
            //! http://localhost:3000/Profile?id=1
            let key_value= window.location.search; //! ?id=1
            //console.log("key_value:",key_value);


            let urlParams = new URLSearchParams(key_value); //! 1
            let urlParams_id = urlParams.get('id');
            
            //console.log("urlParams_id:",urlParams_id);
           
     }, []);
    
    
    const [ip, setIP] = useState('');
      const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log("location:",res.data);
        setIP(res.data.IPv4)
      }
    
    useEffect(() => {
        getData();
    },[])

  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                   
                        <div style={{ display:"flex", gap:"5px" }}>
                            <div style={{ width:"550px" }}> 
                                   <h2>Your IP Address is</h2>
                                    <h4>{ip}</h4>
                            </div>
                        </div>
                   
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
