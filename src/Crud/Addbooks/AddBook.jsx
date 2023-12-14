import React, { useState } from 'react';
import { FormControl, Input, InputLabel, TextField, Button, Stack, TextareaAutosize, Typography } from '@mui/material';
//  var jwt = require('jwt')
const AddBook = () => {
    
    const [details, setDetails] = useState({
      bookName:'',
      author:'',
      category:'',
      description:'',
      discount:'',
      price:'',
      published:'',
      id:''

    });

    const handleChange = (e) => {
        // Validate and update the state only if the input is a number
        if (e.target.name === 'price' || e.target.name === 'discount' ||e.target.name ==='published') {
            const inputValue = e.target.value.trim();
            if (/^\d+$/.test(inputValue) || inputValue === '') {
                setDetails({
                    ...details,
                    [e.target.name]: inputValue,
                });
            }
        } else {
            // Update the state for non-number fields
            setDetails({
                ...details,
                [e.target.name]: e.target.value,
            });
        }
    };

    const addbooks = (e) => {
        e.preventDefault();
    
        // Check if any required field is empty (case-insensitive and ignoring 'e')
        const requiredFields = ['bookName', 'author', 'category', 'description', 'discount', 'price', 'published'];
        const isEmpty = requiredFields.some((field) => !details[field]?.toLowerCase()?.replace('e', ''));
    
        if (isEmpty) {
            alert('Please fill in all required fields.');
            return;
        }else{

        }
    
        
    };
    

    return (
        <div>
            <Stack
                sx={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: { xs: '80%', md: '50vh' },
                    width: { xs: '90%', md: '100%' },
                    
                }}
            >
                <FormControl>
                    <Stack
                        direction={'column'} // Set direction to column for vertical alignment
                        spacing={2}
                        sx={{
                            marginX: 'auto', // Center the Stack horizontally
                            width: { xs: '100%', md: '100%' }, // Adjust width for responsiveness
                            height: { xs: '100%', md: '90vh' },
                            backgroundColor: "#cdffff",
                            padding: '10px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        }}
                    >   
                      <Typography sx={{fontSize:25 }}>......Enter Book Details.....</Typography>
                        <TextField
                            name="bookName"
                            onChange={handleChange}
                            label="BookName"
                            variant="standard"
                            required
                            

                        />

                        <TextField
                            name="author"
                            onChange={handleChange}
                            label="Author"
                            variant="standard"
                            required
                            
                        />
                        <TextField
                            name="category"
                            onChange={handleChange}
                            label="Category"
                            variant="standard"
                            required
                            

                        />

                        <TextareaAutosize
                            name="description"
                            onChange={handleChange}
                            label="Description"
                            placeholder="Description"
                            minRows={3}
                            maxRows={5}
                            required
                            

                        />

                        <FormControl>
                            <InputLabel htmlFor="discount">Discount</InputLabel>
                            <Input
                                id="discount"
                                name="discount"
                                type="number"
                                value={details.discount}
                                onChange={handleChange}
                                required
                                

                            />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="price">Price</InputLabel>
                            <Input
                                id="price"
                                name="price"
                                type="number"
                                value={details.price}
                                onChange={handleChange}
                                required
                                

                            />
                        </FormControl>

                        


                      

                        <Button variant="contained" onClick={addbooks}>
                            AddBook
                        </Button>
                    </Stack>
                </FormControl>
            </Stack>
        </div>
    );
};

export default AddBook;
