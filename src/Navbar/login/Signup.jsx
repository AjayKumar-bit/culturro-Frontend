import React, { useState } from 'react';
import { FormControl, Input, InputLabel, TextField, Button, Stack, TextareaAutosize, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [details, setDetails] = useState({
      name:'',
      email:'',
      password:''
      

    });
    const nevigate=useNavigate()
    const goto=()=>{
      
      nevigate('/viewbooks')
    }

    const handleSignUp=async(e)=>{
      e.preventDefault()
      console.log(details)
  
      const response= await fetch('http://127.0.0.1:9090/auth/createuser',{
        method:"post",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name:details.name,
          email:details.email,
          password:details.password
        })
  
        
      })
      const result=await response.json()
      console.log(result)
      const status = result.status
      if(status){
        const token = result.authtoken
        localStorage.setItem('authtoken',token);
        goto();
        console.log("hahahah")
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

  

    return (
        <div>
            <Stack>
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
                            name="name"
                            onChange={handleChange}
                            label="Name"
                            variant="standard"
                            required
                            

                        />

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

                        

                        

                       

                        


                      

                        <Button variant="contained" onClick={handleSignUp}>
                            Signup
                        </Button>
                    </Stack>
                </FormControl>
            </Stack>
        </div>
    );
};

export default Signup;
