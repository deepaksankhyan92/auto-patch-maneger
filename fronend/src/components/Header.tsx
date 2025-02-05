import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { HeaderProps } from '../types/types';

const Header: React.FC<HeaderProps> = ({ onTabChange, activeTab }) => {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="/cognizantlogo.png"
            alt="Logo"
            height="40"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home" 
              className={activeTab === 'dashboard' ? 'active' : ''}
              onClick={() => onTabChange('dashboard')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#request"
              className={activeTab === 'request' ? 'active' : ''}
              onClick={() => onTabChange('request')}
            >
              My Request
            </Nav.Link>
            <Nav.Link 
              href="#chat" 
              className={activeTab === 'chat' ? 'active' : ''}
              onClick={() => onTabChange('chat')}
            >
              Chat
            </Nav.Link>
            <Nav.Link href="#outage">Outage</Nav.Link>
            <Nav.Link href="#notifications" className="position-relative">
              🔔
              <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                2
              </Badge>
            </Nav.Link>
            <div className="d-flex align-items-center border rounded-pill px-3 py-1 mx-2">
              <Nav.Link href="#aws" className="px-2">
                <img
                  src="AWS.png"
                  alt="AWS"
                  height="24"
                />
              </Nav.Link>
              <Nav.Link href="#azure" className="px-2">
                <img
                  src="azure.png"
                  alt="Azure"
                  height="24"
                />
              </Nav.Link>
              <Nav.Link href="#gcp" className="px-2">
                <img
                  src="gcp.png"
                  alt="GCP"
                  height="24"
                />
              </Nav.Link>
            </div>
            <Nav.Link href="#profile">
              <img
                src="/newProfile.jpg"
                alt="Profile"
                className="rounded-circle"
                height="32"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;