import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
  const hStyle = {
    fontSize: 10,
    color: '#757575',
    fontFamily: 'Helvetica ',
    fontWeight: 'bold',
    wordSpacing: '-2px',
    marginTop: '-5px',
  }

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center' style={hStyle}>
            <a style={hStyle} className='text-center' href='/'>
              Create Apple ID
            </a>{' '}
            |{' '}
            <a style={hStyle} className='text-center' href='/'>
              System Status
            </a>{' '}
            |{' '}
            <a style={hStyle} className='text-center' href='/'>
              Privacy Policy
            </a>{' '}
            |{' '}
            <a style={hStyle} className='text-center' href='/'>
              Terms & Conditions
            </a>{' '}
            | Copyright &copy; 2021 Apple Inc. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
