import { Chat, Person, Search ,Notifications} from "@mui/icons-material";
import './Topar.css'
import { Link } from "react-router-dom";
import { ClassNames } from "@emotion/react";
function Topar(){
    return(
 <div className="toparcontainer">
    <div className="toparleft">
    <Link to={"/login"} className="ss">
    <span className="logo">lamasocial</span>
    </Link>
    </div>
    <div className="toparcenter">
    <div className="searchpar">
    <Search className="searchtool"/>
<input type="text"placeholder="please enter your name friend" className="searchinput" />
    </div>
 </div>
 <div className="toparright">
    <div className="toparkinks">
    <Link to={"/Home"} className="ss">
    <span className="toparlink">Home</span>
    </Link>
    </div>
    <div className="toparicons">
        <div className="topariconsitem">
        <Person/>
        <span className="topariconspadge">5</span>
        </div>
        <div className="topariconsitem">
        <Chat/>
        <span className="topariconspadge">8</span>
        </div>
        <div className="topariconsitem">
        <Notifications/>
        <span className="topariconspadge">16</span>
        </div>
    </div>
    <Link to={"/profile"} className="signinbtn">
    <img className="toparimg" src="/images/person/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"alt="" />
    </Link>
 </div>
 </div>
    )   
}
export default Topar;