import { useEffect } from "react";
import "./index.css";

//! İcons
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImageIcon from '@material-ui/icons/Image';
import CheckIcon from '@material-ui/icons/Check';

export const Index =(props: any) => {  //console.log("proops:",props);
  useEffect(() => {
    console.log("Profile");
  }, [])



    
  return ( 
  <>
     <div className="fileUploadWrapper" >
        <header className="fileUploadWrapperHeader"  >File Upload</header>
        <form action="#">
          <div className="fileUploadWrapperFormFlex" >
              <CloudUploadIcon className="fileUploadWrapperFormFlexIcon" />
              <p className="fileUploadWrapperFormFlexText" > Browse File to Upload </p>
          </div>
        </form>
        <section className="fileUploadWrapperSection" >
        <div className="fileUploadWrapperFileBox" >
          <ImageIcon style={{ fontSize: "30px" }} />
          <div className="fileUploadWrapperFileBoxContent" >
            <div className="fileUploadWrapperFileBoxContentDetails" >
              <span className="fileUploadWrapperFileBoxContentName" > image_01.png * Uploading </span>
              <span className="fileUploadWrapperFileBoxContentPercent" > 50% </span>
            </div>
                    
              <div className="fileUploadWrapperFileBoxContentProgresBar" >
                <div className="fileUploadWrapperFileBoxContentProgres" ></div>
              </div>
          </div>
        </div>
        </section>
        <section className="fileUploadWrapperSection" >
        <div className="fileUploadWrapperFileBox" >
            <ImageIcon style={{ fontSize: "25px" }} />
            <div className="fileUploadWrapperFileBoxContent" >
              <div className="fileUploadWrapperFileBoxContentDetails" >
                <span className="fileUploadWrapperFileBoxContentName" > image_01.png * Uploading </span>
                <span className="fileUploadWrapperFileBoxContentSize" > 10 MB </span>
              </div>
                      
              <CheckIcon className="fileUploadWrapperFileBoxContentDone" />
            </div>
        </div>
        </section>
     </div>
   </>
     
  )
}

export default Index;
