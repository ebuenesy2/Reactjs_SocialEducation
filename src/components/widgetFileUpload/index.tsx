import { useCallback, useEffect, useState } from "react";
import "./index.css";
import {useDropzone} from 'react-dropzone';


//! İcons
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CheckIcon from '@material-ui/icons/Check';
import axios from "axios";

export const Index =(props: any) => {  //console.log("proops:",props);
  useEffect(() => {
    console.log("widgetFileUpload");
    console.log("widgetFileUpload props:", props);
  }, [])

  const [fileUploadFiles, setFileUploadFiles] = useState([] as any);   //! Tüm Veriler

  const onDrop = useCallback((acceptedFiles: string | any[]) => {
       
    console.log("acceptedFiles:", acceptedFiles);
    console.log("acceptedFiles Sayısı:", acceptedFiles.length);
    console.log("acceptedFiles Name:", acceptedFiles[0].name);
    console.log("acceptedFiles Url:", (URL.createObjectURL(acceptedFiles[0])));  
  

    //! Array 
    var ArrayPreview = [] as any;

    for (var i = 0; i < acceptedFiles.length; i++) {
      ArrayPreview.push({
        "file": acceptedFiles[i],
        "name": acceptedFiles[i].name,
        "previewUrl": URL.createObjectURL(acceptedFiles[i]),
        "progressValue": "0%",
        "status": "upload",
        "size": "0 KB"
      }); //! status : upload | done | error
    }
    
    console.log("ArrayPreview:", ArrayPreview);
    setFileUploadFiles(ArrayPreview); //! Verileri güncelliyor    
    
    //! File Upload 
      const url = 'http://localhost:3002/api/file/upload';
    
      //! File
      let data = new FormData();
      data.append('file', acceptedFiles[0]);
      data.append('role', 'role admin');
      data.append('usedPage', 'user');
      data.append('created_byToken', 'created_byToken');

      const options = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (progressEvent: any) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor(loaded * 100 / total); //! Yüzdelik
          console.log(loaded + 'kb of ' + total + 'kb | ' + percent + '%'); //! Yükleme Bilgileri

          //! FileUploadState
          let temp_state = [...fileUploadFiles];
          let temp_element = { ...temp_state[0] };

          temp_element.status = "upload"; //! State Verileri - Status
          temp_element.progressValue = percent + '%';

          temp_state[0] = temp_element;
          setFileUploadFiles(temp_state);
          
        }
      }

      //Post
      axios.post(url, data, options).then((response) => {
        // alert("yüklendi");
        console.log("data:", response.data);
            
        //! FileUploadState
        let temp_state = [...fileUploadFiles];
        let temp_element = { ...temp_state[0] };

        temp_element.status = response.data.status === 1 ? "done" : "error";
        temp_element.name = response.data.DB.fileId;
        temp_element.size = response.data.DB.fileSizeConvert;
        
        temp_state[0] = temp_element;
        setFileUploadFiles(temp_state);
            
      });
    //! File Upload End
   
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple:true });

    
  return ( 
  <>
     <div className="fileUploadWrapper" >
        <header className="fileUploadWrapperHeader"  >File Upload</header>
        <form action="#">
          <div className="fileUploadWrapperFormFlex" >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="fileUploadWrapperFormFlexInput">
                <CloudUploadIcon className="fileUploadWrapperFormFlexIcon" />
                <p className="fileUploadWrapperFormFlexText" > Browse File to Upload or Drag and drop your images here </p>
              </div>              
            </div>
          </div>
        </form>
    
         {Array(fileUploadFiles.length).fill(0).map((el, i) => 
            <p> JsonData: id:{i} name:{fileUploadFiles[i].name}  status:{fileUploadFiles[i].status} progressValue:{fileUploadFiles[i].progressValue} </p>   
         )}
      
     
     </div>
   </>
     
  )
}

export default Index;
