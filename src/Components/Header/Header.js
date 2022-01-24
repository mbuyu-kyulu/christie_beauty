import { Navbar, Container, Nav } from 'react-bootstrap'
import "./Header.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashbord/Dashboard';
import Home from '../Home/Home';

function Header() {
  return (
    <Router>
     
      <div className='navma'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbarText'>
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/" style={{color:'red'}}>HOME</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">
                  <Link to="/login" style={{color:'red'}}>LOGIN</Link>
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <Link to="/register" style={{color:'red'}}>REGISTER</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <marquee>CHRISTIE BEAUTY IS THE BEST OF THE BEST</marquee>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>)
}
export default Header;