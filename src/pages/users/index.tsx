import "./index.css";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Widget from '../../components/widgets';
import Table from '../../components/table';

function Index() {
    
  return (
        <div className='users'>
               <Sidebar/>
               <div className="usersHome">
                    <Navbar />
                    <div className="usersContainer">
                            <div className="Widgets"> 
                                   <Widget type="onlineUser" counter="212" status="positive" statusCount="20" />
                                   <Widget type="user" counter="300" status="negative" statusCount="30" />
                            </div>

                            <div className="listContainer"> 
                               <div className="listTitle">  Tüm Kullanıcılar  </div>
                               <Table pageSize="40" />
                            </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
