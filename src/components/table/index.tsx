import "./index.css"
import Progressbar from '../../components/Items/Progressbar';

export const Index =(props: any) => {
  console.log("proops:",props);

  const testData = [
    { bgcolor: "#6a1b9a", value: 0, maxValue: 100 },
    { bgcolor: "#6a1b9a", value: 10, maxValue: 100 },
    { bgcolor: "#00695c", value: 20, maxValue: 100 }, 
    { bgcolor: "#ef6c00", value: 30, maxValue: 100 },
    { bgcolor: "#ef6c00", value: 40, maxValue: 100 },
    { bgcolor: "#ef6c00", value: 50, maxValue: 100 },
    { bgcolor: "#ef6c00", value: 60, maxValue: 100 },
    { bgcolor: "#ef6c00", value: 70, maxValue: 100 },
    { bgcolor: "#ef6c00", value: 80, maxValue: 100 },
    { bgcolor: "#ef6c00", value: 90, maxValue: 100 },
    { bgcolor: "#ef6c00", value: 100, maxValue: 100 },
  ];
    
  return (
        <div className='list'>
               {testData.map((item, idx) => (
                <Progressbar 
                     //bgcolor={item.bgcolor} 
                     value={item.value}
                     maxValue= {item.maxValue}
                     percView = {true}
                 />
              ))}
        </div>
    
  )
}

export default Index;
