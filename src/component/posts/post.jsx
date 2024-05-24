import { MoreVert } from '@mui/icons-material';
import './post.css'
import { Users ,Posts, Myinfo} from '../../dumy';
import { useState } from 'react';
function Post({mypost}){
     const [like,setlike]=useState();
     const [likeed,setlikeed]=useState(false);
    // const Handle =()=>{
    //     setlike(likeed? like -1 : like+1);
    //     setlikeed(!likeed);
    // }
const Homeposts=function(){
    return(
        Posts.map((p)=>{
           const x=Users.filter(u=> u.id === p.userId)
            return(
        <div key={p.id}>
        <div className="post">
            <div className="postwrapp">
            <div className="posttop">
    <div className="posttopleft">
    <img src={x[0].propic} alt="" className="postim" />
    <span className='postusname'>{x[0].username}</span>
    <span className='postdate'>{p.date}</span>
    </div>
    <div className="posttopright">
        <MoreVert/>
    </div>
    </div>
    <div className="postcenter">
        <div className="posttext">{p.dis}</div>
        <img src={p.photo} alt="" className="postimage" />
    </div>
    <div className="postbottom">
        <div className="bottomlift">
            <img src="/images/Facebook_Like_React.png" className="likicon"  onClick={() =>{setlike(p.like+=1)}} alt="" />
            <img src="/images/images.png" className="likicon" alt=""  onClick={() =>{setlike(p.like+=1)}}/>
            <span className="likecounter">{p.like}</span>
        </div>
        <div className="bottomright">
            <span className="comment">{p.Comment} comment</span>
        </div>
    </div>
            </div>
        </div>
        </div>
                ) }
                )
    )
}
const Profileposts=function(){
    return(
    Posts.map((p)=>{
           const x=Myinfo[0];
            return(
        <div key={p.id}>
        <div className="post">
            <div className="postwrapp">
            <div className="posttop">
    <div className="posttopleft">
    <img src={x.propic} alt="" className="postim" />
    <span className='postusname'>{x.username}</span>
    <span className='postdate'>{p.date}</span>
    </div>
    <div className="posttopright">
        <MoreVert/>
    </div>
    </div>
    <div className="postcenter">
        <div className="posttext">{p.dis}</div>
        <img src={p.photo} alt="" className="postimage" />
    </div>
    <div className="postbottom">
        <div className="bottomlift">
            <img src="/images/Facebook_Like_React.png" className="likicon"  onClick={() =>{setlike(p.like+=1)}} alt="" />
            <img src="/images/images.png" className="likicon" alt=""  onClick={() =>{setlike(p.like+=1)}}/>
            <span className="likecounter">{p.like}</span>
        </div>
        <div className="bottomright">
            <span className="comment">{p.Comment} comment</span>
        </div>
    </div>
            </div>
        </div>
        </div>
                ) }
                )
    )
}
return(<>
 {mypost?<Profileposts/>:<Homeposts/>}
</>
)
}
export default Post;
