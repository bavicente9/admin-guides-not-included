import './Login.scss'
import {auth, provider} from '../../firebase-config'

import {signInWithPopup} from 'firebase/auth'
const Login = () => {
  
    const sigInWithEmail = () => {
      signInWithPopup(auth,provider).then(()=>{
        
      })
    }


    return(
        <div className="loginPage">
            <p>Sign In with E-mail</p>
            <button className='loginPage_button-login'>Login</button>
        </div>
    )
}

export default Login