import "./index.css";
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import Widget from '../../components/widgets';
import Featured from '../../components/featured';
import Chart from '../../components/charts';
import Table from '../../components/table';



function Index() {
    
  return (
        <div className='home'>
              <Sidebar/>
              <div className="homeContainer"> 
                  <Navbar />
                  <div className="Widgets"> 
                          <Widget type="user" counter="212" status="positive" statusCount="20" onlineCount="15" />
                          <Widget type="teachers" counter="300" status="negative" statusCount="30" onlineCount="25" />
                          <Widget type="advertisers" counter="350" status="negative" statusCount="65" onlineCount="35" />
                          <Widget type="sponsors" counter="450" status="positive" statusCount="10000"  onlineCount="45"/>
                          <Widget type="totallessonhours" counter="922" status="positive" statusCount="150" onlineCount="55" />
                  </div>
                  <div className="Charts"> 
                        <Featured />
                        <Chart />
                  </div>

               
                  
              </div>
        </div>
    
  )
}

export default Index;
