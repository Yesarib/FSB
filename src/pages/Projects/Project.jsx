import { Box} from '@mui/material'
import Card from 'react-bootstrap/Card';
import React from 'react'

const Project = () => {
  return ( 
    <>
      <div className='d-flex justify-content-center align-content-center '>
        <Box>
          <Card.Img style={{width:'20rem'}} variant="top" src="assets/kaba-insaat.jpg" />
        </Box>
        <Box>
          <div style={{marginLeft:'15px'}}>
            <h5 style={{marginTop:'50px',marginLeft:'15px'}}>Yapılan Yerin İsmi</h5>
            <hr style={{marginLeft:'10px'}} />
            <p style={{}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iure consectetur voluptatibus quam, necessitatibus nobis aspernatur non,
              a eius, culpa ratione maxime fugiat in error! Maxime molestias culpa reprehenderit quod!
            </p>
            <hr style={{marginLeft:'10px'}} />
            <p>Adres adres</p>
          </div>
        </Box>
      </div>
      <div>

      </div>
    </>
  )
}

export default Project