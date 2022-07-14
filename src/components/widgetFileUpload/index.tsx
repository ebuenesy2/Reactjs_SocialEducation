import { useCallback, useEffect, useState } from "react";
import "./index.css";

import {useDropzone} from 'react-dropzone';


export const Index =(props: any) => {  //console.log("proops:",props);
  useEffect(() => {
    console.log("Profile");
  }, [])



  const onDrop = useCallback(acceptedFiles => {
          
    console.log("acceptedFiles:", acceptedFiles); //! Yüklenenler
    console.log("acceptedFiles Count:", acceptedFiles.length); //! Yüklenen Sayısı
    console.log("acceptedFi les[0]:", acceptedFiles[0]);
    console.log("acceptedFiles[0] name:", acceptedFiles[0].name);

  }, []);

   const { getRootProps, getInputProps } = useDropzone({ onDrop });
    
  return ( 
  <>
        <div className='widgetFileUpload'>
        <div className="drop">
          
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div>Drag and drop your images here.</div>
            </div>
           </div>
        </div>
   </>
     
  )
}

export default Index;
