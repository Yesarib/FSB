import React from 'react'
import { Box } from '@mui/material'
import './middle.css'

const Middle = () => {
  return (
    <div className='justify-content-center d-flex'>
        <Box className='justify-content-center d-flex'>
            <img src="assets/insaat1.jpg" alt="insaat1" />
            <p style={{marginTop:'50px',alignItems:'center'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro, perferendis alias! Ab hic sequi eveniet! Voluptatum nam dolore voluptas saepe,
                sapiente voluptate modi iste iure nemo nobis necessitatibus, id quidem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro, perferendis alias! Ab hic sequi eveniet! Voluptatum nam dolore voluptas saepe,
                sapiente voluptate modi iste iure nemo nobis necessitatibus, id quidem?
            </p>
        </Box>
    </div>
  )
}

export default Middle