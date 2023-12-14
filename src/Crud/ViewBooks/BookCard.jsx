import React from 'react'
import { Card,CardContent,Typography ,CardActions,Button,Stack} from '@mui/material'
const BookCard = () => {
  return (
    <div>
        <Card sx={{width:{xs:"40%",md:"15%"} }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <Stack direction={'row'}>
        <CardActions>
            <Button size="small">Edit</Button>
        </CardActions>
        <CardActions>
            <Button size="small">Delete</Button>
        </CardActions>
      </Stack>
    </Card>
    </div>
  )
}

export default BookCard