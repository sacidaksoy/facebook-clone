import { Button } from '@mui/material'
import React from 'react'
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from './firebase'
import './Login.css'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const auth = getAuth();
    const signIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <div className="login__logo">
            <img src="https://freesvg.org/img/instagram_profile-pic.png" alt="" />
            <img src="https://freesvg.org/img/facebook.png" alt="" />
        </div>
        <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login