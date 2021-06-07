import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { withAuth0 } from '@auth0/auth0-react';
import './css/Header.css';
import LogoutButton from './LogoutButton.js';
import LoginButton from './LoginButton.js';

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
      <Navbar className="Header">
        <h2>Header</h2>
        {this.props.auth0.isAuthenticated
        ? <>
        <Link to="/about">About</Link>
        </>
        : <Link to="/">Home</Link>}
        <LogoutButton />
        <LoginButton />
        </Navbar>
      </>
    );
  }
}

export default withAuth0(About);
