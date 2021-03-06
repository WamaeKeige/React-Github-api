import React, { Component } from 'react'
import {Navbar,Button, Nav, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Header extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  login(){
    this.props.auth.login();
  }
  logout(){
    this.props.auth.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a>Github Searcher</a>
        </Navbar.Brand>
        <Button bsStyle="primary" className="btn-margin" onClick={this.goTo.bind(this, 'home')}>Home</Button>
        {! isAuthenticated() &&(<Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>)
                }
                {
             isAuthenticated() && (
                 <Button
                   bsStyle="primary"
                   className="btn-margin"
                   onClick={this.logout.bind(this)}
                 >
                   Log Out
                 </Button>
               )
           }
      </Navbar.Header>
      <Nav>
        <NavItem href="#">Login</NavItem>
      </Nav>
      </Navbar>
    );
  }
}
