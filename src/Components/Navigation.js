import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation  = () =>{

    return(
      <div >
        <Navbar id="navigation" sticky="top" bg="light" expand="md" >
          <Navbar.Brand href="#home"><img width="40px"src="https://banner2.kisspng.com/20180328/iqq/kisspng-logo-olive-branch-olives-5abc1206319f42.7040841115222748222033.jpg"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{marginRight: '5%'}} className="ml-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )


}

export default Navigation
