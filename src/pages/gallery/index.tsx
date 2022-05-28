import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Post from "../../components/post";
import "./index.css";


function Index() {
    
  return (
        <div className='gallery'>
               <Sidebar/>
               <div className="galleryHome">
                    <Navbar />
                    <div className="galleryContainer">
                           
                           <div className="galleryPost">
                                     <Post userInfoName="Olga Sukhorukova" userInfoTime ="12 days ago" likeCount="340" commentCount="500" imgsrc="./assets/img/3.jpg" />
                                  
                                     <Post userInfoName="Olga Sukhorukova" imgsrc="./assets/img/9.jpg"/>
                                     <Post userInfoName="Olga Sukhorukova" imgsrc="./assets/img/12.jpg"/>
                                     <Post userInfoName="Olga Sukhorukova" imgsrc="./assets/img/14.jpg"/>
                                     <Post userInfoName="Olga Sukhorukova" imgsrc="./assets/img/11.jpg"/>
                                     <Post userInfoName="Olga Sukhorukova" imgsrc="./assets/img/16.jpg"/>
                                     <Post userInfoName="Olga Sukhorukova" imgsrc="./assets/img/10.jpg"/>
                                     <Post userInfoName="Olga Sukhorukova" imgsrc="./assets/img/13.jpg"/>
                                     <Post userInfoName="Olga Sukhorukova" imgsrc="./assets/img/17.jpg"/>
                                     <Post userInfoName="Olga Sukhorukova" imgsrc="./assets/img/18.jpg"/>
                                     <Post userInfoName="Olga Sukhorukova" imgsrc="./assets/img/1.jpg"/>
                                     <Post userInfoName="Olga Sukhorukova" imgsrc="./assets/img/2.jpg"/>
                           </div>

                    </div>
               </div>
        </div>
    
  )
}

export default Index;
