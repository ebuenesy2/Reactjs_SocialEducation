import "./index.css"

//! icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

export const Index =(props: any) => {
  console.log("props:",props);

    
  return (
        <div className='postMain'>

            <div className="iconbox">
                <div className="shareIcon"> <ShareIcon /> </div>
                <div className="deleteIcon"> <DeleteIcon /> </div>
            </div>
            
            <div className="postView">
                <img className="postImg" src={props.imgsrc}  alt="" /> 
            </div>
            <div className="postDetail">
                <div className="user">
                    <img className="avatar" src="./assets/img/1.jpg"  alt="" />
                    <div className="userInfo">
                       <a className="userInfoName">  Olga Sukhorukova </a>
                       <a className="userInfoTıme">  12 days ago </a>
                    </div>
                </div>
                <div className="postStatus">
                    <div className="like">
                        <FavoriteIcon />
                        <div className="likeCount"> 300 </div>
                    </div>
                    <div className="comment">
                          <CommentIcon /> 
                          <div className="commentCount">200</div>
                    </div>
                    <div className="view">
                          <VisibilityIcon /> 
                          <div className="viewCount">200</div>
                    </div>
                </div>

            </div>
             
            
        </div>
    
  )
}

export default Index;
