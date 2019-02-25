import React from 'react';
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button'

const Header = () => {
  return (
    <div id="header">
      <Navigation  />
      <div className="header-text">
        <h1 style={{fontSize: '64px'}}>Eolive</h1>
        <h3>Spanish Oil for people who like oil and stuff</h3>
        <Button style={{marginTop: '100px'}} variant="primary">Call to Action</Button>
      </div>


    </div>
  )
}

export default Header
