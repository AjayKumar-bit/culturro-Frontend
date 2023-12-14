import React from 'react'
import  { useState } from 'react';
import './Login.css'
import Toggle from './Toggle';
import { Paper } from '@mui/material';
export const LoginANdSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log(`Logging in with username: ${username} and password: ${password}`);
    

    
        

  }


  return (
    <>
      <Toggle/>
    </>
  


    
  )
}
export default LoginANdSignup