import React, { useState } from 'react'
import { Paper,Stack,Typography,Switch, colors,Box } from '@mui/material'
import Login1 from './Login'
import Signup from './Signup'

const Toggle = () => {
    const [checked,setChecked] =useState(false)
    const handleToggle =(e)=>{
        setChecked(e.target.checked)
        console.log(checked)
    }
  return (
    <>
            
    <Box sx={{marginLeft: {md:"40%"} , justifyContent: "center", alignItems: "center" }} >
    <Paper spacing={3} square={false} sx={{ width: { xs: '60vw', md: '45vh' }, height: '50vh',marginTop:5 }}>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent={'center'}>
        <Typography sx={{ color: checked ? 'inherit' : '#1d91ca' }}>
            Login
        </Typography>
            <Switch  checked={checked}  onChange={handleToggle}  inputProps={{ 'aria-label': 'controlled' } } color='default'/>
            <Typography sx={{ color: checked ? '#1d91ca' : 'inherit' }}>
                Signup
            </Typography>
            
            
        </Stack>
        {checked?(<Signup/>):(<Login1/>)}
    </Paper>
    </Box>
</>
  )
}

export default Toggle