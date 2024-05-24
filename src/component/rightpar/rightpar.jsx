import './rightpar.css'
import { Users } from '../../dumy';
function Right({profile}){
    const Homerightbar=()=>{
        return(
            <>
            <div className="birthdaycontaner">
            <img src="/images/4213958.png" className="birtimage" alt="" />
        <span className="birttext">
            <b>pola foster</b> and <b>3 other frinds</b> have birth day to day
        </span>
        </div>
        <img src="/images/posts/360_F_563769202_XvjMvyMO593Wt70Um2OQPJ5CZrTXbT4t.jpg" alt="" className="rightbard" />
        <h4 className='righttitle'>online frinds</h4>
        <ul className="findlist">
   { Users.map((e)=>{
        return(
                    <li className="rightpardfrinds" key={e.id}>
                        <div className="rightparimagecontener">
                        <img src={e.propic} className="rightparprofile" alt=""/>
                        <span className="online"></span>
                        </div>
                        <span className='rightuname'>{e.username}</span>
                    </li>
            )})}
                </ul>
            </>
        )
    }
    const Profilepage=()=>{
        return(
            <>
            <h4 className="rightparinfotitle">Profile Info:</h4>
            <div className="rightparinfoitems">
            <div className="rightparinfoitem">
                <span className="key">city:</span>
                <span className="value">New yourk</span>
            </div>
            <div className="rightparinfoitem">
                <span className="key">from:</span>
                <span className="value">Egypt</span>
            </div>
            <div className="rightparinfoitem">
                <span className="key">relationship:</span>
                <span className="value">Single</span>
            </div>
            </div>
        <h4 className="rightpartitle">your frinds</h4>
        <div className="followings">
            <div className="follow">
                <img src="/images/person/download (1).jpg" alt="" className="followimage" />
                <span className="followname">josef</span>
            </div>
            <div className="follow">
                <img src="/images/person/download (2).jpg" alt="" className="followimage" />
                <span className="followname">josef</span>
            </div>
            <div className="follow">
                <img src="/images/person/download (3).jpg" alt="" className="followimage" />
                <span className="followname">josef</span>
            </div>
            <div className="follow">
                <img src="/images/person/download (4).jpg" alt="" className="followimage" />
                <span className="followname">josef</span>
            </div>
            <div className="follow">
                <img src="/images/person/download (2).jpg" alt="" className="followimage" />
                <span className="followname">josef</span>
            </div>
            <div className="follow">
                <img src="/images/person/download (1).jpg" alt="" className="followimage" />
                <span className="followname">josef</span>
            </div>
        </div>
            </>
        )
    }
    return(
        <div className='rightpar'>
        <div className="rightwrapper">
            {profile?<Profilepage/>:<Homerightbar/>}
                </div>
            </div>
            )
}
        
export default Right;