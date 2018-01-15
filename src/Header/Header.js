import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
          <Navbar>
            <Nav>
              <NavItem><Link to='/'>Home</Link></NavItem>
              <NavItem><Link to='/about'>About</Link></NavItem>
              <NavItem><Link to='/users'>Users</Link></NavItem>
            </Nav>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default Header;