import React, { useState } from 'react';
import { FormControl, Input, InputLabel, TextField, Button, Stack, TextareaAutosize, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [details, setDetails] = useState({
      
      email:'',
      password:''
      

    });
    const nevigate=useNavigate()
    const goto=()=>{
      
      nevigate('/viewbooks')
    }

    const handleLogin =async(e)=>{
      e.preventDefault()
  
      const response= await fetch('http://127.0.0.1:9090/auth/login',{
        method:"post",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email:details.email,
          password:details.password
        })
  
        
      })
      const result=await response.json()
      console.log(result)
      const status = result.status
      if(status){
        const token = result.authtoken
        localStorage.setItem('authtoken',token)
        goto();
        return
      }
  
    }

    const handleChange = (e) => {
        // Validate and update the state only if the input is a number
      
            // Update the state for non-number fields
            setDetails({
                ...details,
                [e.target.name]: e.target.value,
            });
        
    };

    const show = (e) => {
        e.preventDefault();
    
      
    
        console.log(details);
    };
    

    return (
        <div>
            <Stack
                // sx={{
                //     display: 'grid',
                //     justifyContent: 'center',
                //     alignItems: 'center',
                //     height: { xs: '50%', md: '50vh' },
                //     width: { xs: '90%', md: '100%' },
                    
                // }}
            >
                <FormControl>
                    <Stack
                        direction={'column'} // Set direction to column for vertical alignment
                        spacing={2}
                        sx={{
                            marginX: 'auto', // Center the Stack horizontally
                            width: { xs: '100%', md: '100%' }, // Adjust width for responsiveness
                            height: { xs: '50vh', md: '50vh' },
                            backgroundColor: "#cdffff",
                            padding: '10px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        }}
                    >   
                      {/* <Typography sx={{fontSize:25 }}>......Enter Book Details..... </Typography> */}
                        

                        <TextField
                            name="email"
                            onChange={handleChange}
                            label="Email Id"
                            variant="standard"
                            type='email'
                            required
                            
                        />
                        <TextField
                            name="password"
                            onChange={handleChange}
                            label="Password"
                            variant="standard"
                            type="password"
                            required
                            

                        />

                        

                        

                       

                        


                      

                        <Button variant="contained" onClick={handleLogin}>
                            Login
                        </Button>
                    </Stack>
                </FormControl>
            </Stack>
        </div>
    );
};

export default Login;
