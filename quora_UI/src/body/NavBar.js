import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Badge from 'react-bootstrap/lib/Badge'
import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'
import AppActions from '../actions/AppActions'
import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'
import FormGroup from 'react-bootstrap/lib/FormGroup'
// import Notification from './Notification/Overlay'
// import Overlay from 'react-bootstrap/lib/Overlay'
// import sharedProps from 'react-bootstrap/lib/sharedProps'
// import Tooltip from 'react-bootstrap/lib/Tooltip'

export default class MyNavBar extends React.Component {

  constructor(){
    super();
    this.getUserButton = this.getUserButton.bind(this);
  }
  handleUserClick = () => {
    AppActions.showLoginPopup();
  };

  handleSignUpClick = () => {
    AppActions.showSignUpPopup();
  };

  handleOnAddQclick = () => {
    AppActions.showAddQPopup();
  };

  getUserButton=() => {
    let user = this.props.user;
    if(Object.keys(user).length === 0){
          return <Nav>
            <NavItem eventKey={1} href="#">
             <Button bsStyle="primary"  onClick={this.handleUserClick}>Login</Button>               
              </NavItem>
              <NavItem eventKey={1} href="#">
              <Button bsStyle="primary"  onClick={this.handleSignUpClick}>Sign Up</Button>
              </NavItem>
              </Nav>
    }

    return <NavItem eventKey={4} href="#">{user.firstName}</NavItem>
  };

  render() {
    return (
      <div>
        <Navbar >
          <Navbar.Header>
            <Navbar.Brand>
              <button type="button" class="btn btn-default btn-lg">
                <span aria-hidden="true"></span> <a href="#brand">Quora</a>
              </button>
              {/* <Button>Default</Button> */}

            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                
                <button type="button" class="btn btn-default btn-lg">
                    <span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home
                </button>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <button type="button" class="btn btn-default btn-lg">
                  <span class="glyphicon glyphicon-edit" aria-hidden="true"></span> Answer
                </button>
              </NavItem>
              <NavItem eventKey={2} href="#">
                {/* <Notification/> */}
                <button type="button" class="btn btn-default btn-lg">
                  <span class="glyphicon glyphicon-bell" aria-hidden="true"></span> Notification
                </button>       
              </NavItem>
  
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <FormControl type="text" placeholder="Search Quora"/>
              </NavItem>
              <NavItem eventKey={2} href="#">
              <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
              </NavItem>
              {
                this.getUserButton()
              }
              <NavItem eventKey={2} href="#">
                <Button bsStyle="warning"  onClick={this.handleOnAddQclick}>Add Question</Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>   
        </Navbar>
      </div>
    )
  }
}