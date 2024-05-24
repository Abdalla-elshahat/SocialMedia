import { Users } from '../../dumy';
import './sidepar.css'
import { Bookmark, Chat, Event, Group, PlayCircle, QuestionAnswer, RssFeed, School, WorkOffOutlined } from '@mui/icons-material';
function Sidpar(){
    return(
        <div className='sidpar'>
            <div className='sidparWrapper'>
                <ul className="list">
                    <li className="item">
                        <RssFeed className='sidparicon'/>
                        <span className="itemtext">Feed</span>
                    </li>
                    <li className="item">
                        <Chat className='sidparicon'/>
                        <span className="itemtext">chats</span>
                    </li>
                    <li className="item">
                        <PlayCircle className='sidparicon'/>
                        <span className="itemtext">Videos</span>
                    </li>
                    <li className="item">
                        <Group className='sidparicon'/>
                        <span className="itemtext">Groups</span>
                    </li>
                    <li className="item">
                        <Bookmark className='sidparicon'/>
                        <span className="itemtext">Bookmarks</span>
                    </li>
                    <li className="item">
                        <QuestionAnswer className='sidparicon'/>
                        <span className="itemtext">Questions</span>
                    </li>
                    <li className="item">
                        <WorkOffOutlined className='sidparicon'/>
                        <span className="itemtext">jops</span>
                    </li>
                    <li className="item">
                        <Event className='sidparicon'/>
                        <span className="itemtext">Events</span>
                    </li>
                    <li className="item">
                        <School className='sidparicon'/>
                        <span className="itemtext">Courses</span>
                    </li>
                    
                </ul>
                <button className='sidbtn'>Show more</button>
                <hr className='hrs'/>
                {Users.map((e)=>{
                    return(
<ul className="frindlist" key={e.id}>
                    <li className="sidfrind">
                        <img src={e.propic} alt="" className="image" />
                        <span className="name">{e.username}</span>
                    </li>
                </ul>
                    )
                })}
                </div>
                </div>
    )
}
export default Sidpar;