import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import Button from 'react-bootstrap/Button'
import vjan from '../../Components/page/vjan.png'
import { Dropdown, DropdownButton } from 'react-bootstrap';
const header = () => {
  const [ShowDropDown, SetDropDown]=useState(false)

  const handleMouseEnter=()=>{
    SetDropDown(true)
  }
  const handleMouseLeave=()=>{
    SetDropDown(false)
  }
   

  return (
    <Navbar expand="lg" id='gradientBackground1' className="bg-body-tertiary shadow-p sticky-top" style={{height:"6rem"}}>
    <Container>
      <Navbar.Brand className='text-primary' href="https://vjansoftware.com/"><img src={vjan} alt="vjan" style={{height:"80px"}} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
          <Nav.Link className='hovr' href="/home">Home</Nav.Link>
          <Nav.Link className='hovr' href="/Register">Register</Nav.Link>
          <Nav.Link className='hovr' href="/login">User Login</Nav.Link>
          <Dropdown className='hovr' href="/Admin" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} show={ShowDropDown} >
          <Dropdown.Toggle variant='none'> Admin </Dropdown.Toggle>
         
          {ShowDropDown &&(
            <Dropdown.Menu className='dropDownToggle' show style={{ position: 'absolute', zIndex: '1000', top: '4rem', }}>
              <Dropdown.Item href='/adminRegister'>Sign up</Dropdown.Item>
              <Dropdown.Item href='/adminLogin'>Login</Dropdown.Item>            
            </Dropdown.Menu>
          )}
           </Dropdown>
          <Nav.Link className='hovr' href="/aboutus">About Us</Nav.Link>
          <Button style={{height:"1%"}} variant="outline-primary">தமிழ்</Button>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default header