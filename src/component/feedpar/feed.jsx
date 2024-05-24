
import Share from '../share/share';
import Post from '../posts/post';
import './feed.css'
function Feed(profile){
    return(
        <div className='feed'>
            <div className="wrappfeed">
                <Share/>
               <Post mypost={profile}/>
            </div>
        </div>
    )
}
export default Feed;