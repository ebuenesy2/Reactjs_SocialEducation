import "./index.css";
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import Widget from '../../components/widgets';
import Featured from '../../components/featured';
import Chart from '../../components/charts';



function Index() {
    
  return (
        <div className='home'>
              <Sidebar/>
              <div className="homeContainer"> 
                  <Navbar />
                  <div className="Widgets"> 
                          <Widget type="onlineUser" counter="212" status="positive" statusCount="20" />
                          <Widget type="user" counter="300" status="negative" statusCount="30" />
                          <Widget type="revenue" counter="₺ 250" status="negative" statusCount="65" />
                          <Widget type="orders" counter="450" status="positive" statusCount="10000" />
                          <Widget type="commets" counter="922" status="positive" statusCount="150" />
                  </div>
                  <div className="Charts"> 
                        <Featured />
                        <Chart />
                        
                  </div>
                  
                  Home
                  
              </div>
        </div>
    
  )
}

export default Index;
