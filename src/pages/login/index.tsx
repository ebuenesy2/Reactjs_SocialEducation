import "./index.css";
import React from 'react';

//! Metariul
import Checkbox from '@material-ui/core/Checkbox';

//! Icon


function Index() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event:any) => {
    setChecked(event.target.checked);
  };
    
  return (
        <div className='login'>
         
           <div className="main">
            
              <div className="signupPanel" >
                
              </div>

              <div className={`loginPanel ${checked ? 'loginPanel-active' : ''}`}>
                  
                
              </div>
           </div>

        </div>
    
  )
}

export default Index;
