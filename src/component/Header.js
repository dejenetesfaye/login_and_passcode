import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
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
  )
}

export default Header
