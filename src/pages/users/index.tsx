import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Widget from '../../components/widgets';
import TableUser from '../../components/tableUser';



function Index() {

       const [products, setProducts] = useState<any[]>([])
       const [productsData, setProductsData] = useState<any[]>([])
     
     
       useEffect(() => {
         const apiUrl_table=process.env.REACT_APP_API_URL+"/api/user/all";
         
         axios.get(apiUrl_table)
           .then(response => {
     
             //! State
             setProducts(response.data);
             setProductsData(response.data.DB);
               
           })
           .catch(error => {  console.log("Api Error:",error.message); });
           
         
       }, []);
    
  return (
        <div className='users'>
               <Sidebar/>
               <div className="usersHome">
                    <Navbar />
                    <div className="usersContainer">
                            <div className="Widgets"> 
                                   <Widget type="user" counter={productsData.length} status="negative" statusCount="30" />
                            </div>

                            <div className="listContainer"> 
                               <div className="listTitle">  Tüm Kullanıcılar  </div>
                               <TableUser pageSize="10" />
                            </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
