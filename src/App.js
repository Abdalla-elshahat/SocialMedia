import { Route, Routes } from "react-router-dom";
import Home from "./component/page/home/home";
import Login from "./component/page/home/login/login";
import Profile from "./component/profile/profile";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Profile" element={ <Profile profile={true}/>}/>
        <Route path="/login" element={ <Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
