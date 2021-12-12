import React from 'react'
import { Container } from 'react-bootstrap'

const Verifay = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '30%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Container>
        <div className='sorry'>Verification Failed</div>
        <div className='cantfind'>
           Your Apple ID or Password was Incorrect.
        </div>
        <div className='return'>
          
        </div>
      </Container>
    </div>
  )
}

export default Verifay
