import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";


import WidgetCardChartMini  from "../../components/widgetCardChartMini";


function Index() {    
    
  useEffect(() => {
    console.log("Profile");
  }, [])


  const ChartWeekJsonData = [
    { name: 'Ocak', pv: 0 },
    { name: 'Şubat', pv:25 },
    { name: 'Mart', pv: 100 },
    { name: 'Nisan', pv:25 },
    { name: 'Mayis', pv: 100 },
    { name: 'Haziran', pv: 50 },
    { name: 'Temmuz', pv: 100 },
];
  


  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                   
                        <div style={{ display:"flex", gap:"5px" }}>
                            <div style={{ width:"380px" }}> 
                              <WidgetCardChartMini
                                backgroundColor={"#F1F1F1"}
                
                
                                title={"Yemek Siparişleri"}
                                colorTitle={"#344563"}
                                fontSizeTitle={"14px"}
                                fontWeightTitle={"400"}

                                value={"480"}
                                colorValue={"#344563"}
                                fontSizeValue={"20px"}
                                fontWeightValue={"700"}

                                status={"negative"}
                                titleDetailDescription={"20%"}
                                fontSizeDetailDescription={"14px"}
                                fontWeightDetailDescription={"700"}
                                
                                titleDetailTimeDescription={"Bu Hafta"}
                                colorDetailTimeDescription={"#344563"}
                                fontSizeDetailTimeDescription={"14px"}
                                fontWeightDetailTimeDescription={"700"}
                
                                chartLineColor={"#344563"}
                                JsonData={ChartWeekJsonData}
                              />
                            </div>
                        </div>
                   
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
