import './profile.css'
import Feed from '../feedpar/feed';
import Topar from "../Topar/Topar";
import Sidpar from "../sidepar/sidepar";
import Right from "../rightpar/rightpar";
function Profile(){
return(
    <>
 <Topar/>
     <div className="profile">
     <Sidpar/>
        <div className="profileright">
            <div className="profilerighttop">
                <div className="profilecover">
                    <img src="/images/posts/360_F_563769202_XvjMvyMO593Wt70Um2OQPJ5CZrTXbT4t.jpg" alt="" className="profilecoverimg" />
                     <img src="/images/person/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className="profileusimg" />
                </div>
                <div className="profileinfo">
                    <h3 className='profilename'>sofa</h3>
                    <span className="profileinfodes">hello every body welcom to jumangy</span>
                </div>
            </div>
            <div className="profilerightbottom">
            <Feed profile/>
            <Right profile/>
            </div>
        </div>
     </div>
    </>
)
}
export default Profile;