import { ArrowBack, ArrowBackIos } from '@mui/icons-material';
import './login.css'
import { Link } from 'react-router-dom';
function Login(){
return(
    <>
    <div className="login">
        <div className="wrapplogin">
            <Link to={"/Home"}>
            <ArrowBack className='backicon' /> 
            </Link>
            <div className="loginleft">
            <h1 className='loginlogo'>lamasocial</h1>
                <span className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quis accusamus aut</span>
            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input type="email" placeholder='email' className="inputlogin" />
                    <input type="password" placeholder='password' className="inputlogin" />
                    <button className="btnlogin">Log In</button>
                    <span className="loginforget">Forgot password?</span>
                    <button className="newaccount">Create a new account</button>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Login;