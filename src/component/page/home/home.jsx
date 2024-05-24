import Feed from "../../feedpar/feed";
import Topar from "../../Topar/Topar";
import Sidpar from "../../sidepar/sidepar";
import Right from "../../rightpar/rightpar";
import './home.css';
function Home(){
    return(
 <>
     <Topar/>
     <div className="homecontainer">
     <Sidpar/>
     <Feed/>  
     <Right/>
     </div>
 </>
    )   
}
export default Home;