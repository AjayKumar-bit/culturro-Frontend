import { Paper ,Pagination} from '@mui/material'
import React from 'react'
import BookCard from './BookCard'

const ViewBooks = () => {
  return (
    <div>
        <Paper elevation={3}>
          <BookCard/>
          <Pagination count={10} color="primary" sx={{marginTop:1,marginBottom:2}}/>
        </Paper>

    </div>
  )
}

export default ViewBooks