import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import imageUrlBuilder from '@sanity/image-url'

let logo = ''

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'v8yw3pc6',
  dataset: 'dev',
  useCDN: true
})


const builder = imageUrlBuilder(client)

client
  .fetch(
    '*[_type == $type][0]', // Query
    {type: 'header'} // Params (optional)
  )
  .then(res => {
    console.log('logo: ', res.logo.asset._ref)
    logo = res.logo
    console.log(logo)
  })
  .catch(err => {
    console.error('Oh no, error occured: ', err)
  })

  function urlFor(source) {
    return builder.image(source)
  }
const Navigation  = () =>{

    return(
      <div >
        <Navbar id="navigation" sticky="top" bg="light" expand="md">
          <Navbar.Brand href="#home"><img alt="logo "width="40px" src={urlFor(logo.asset).width(40).url()}/></Navbar.Brand>
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
