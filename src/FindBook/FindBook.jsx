import React, { useState } from 'react';
import { TextField, Button, Stack ,FormControl} from '@mui/material';

const FindBook = () => {
    const [details, setDetails] = useState({
      bookName:''
     
    });

    const handleChange = (e) => {
       
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
                sx={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: { xs: '100%', md: '100%' },
                    marginTop:-20
                    
                }}
            >
                <FormControl>
                    <Stack
                        direction={'column'} // Set direction to column for vertical alignment
                        spacing={2}
                        sx={{
                            marginX: 'auto', // Center the Stack horizontally
                            width: { xs: '100%', md: '140%' }, // Adjust width for responsiveness
                            backgroundColor: "#cdffff",
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        }}
                    >   
                      
                        <TextField
                            name="bookName"
                            onChange={handleChange}
                            label="BookName"
                            variant="standard"
                            

                        />

                        


                        <Button variant="contained" onClick={show}>
                            Find
                        </Button>
                    </Stack>
                </FormControl>
            </Stack>
        </div>
    );
};

export default FindBook;
