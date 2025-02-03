import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-light border-end" style={{ width: '60px', height: '100vh', position: 'fixed', top: '0', left: '0', paddingTop: '70px' }}>
      <Nav className="flex-column text-center">
        <Nav.Link href="#dashboard" className="py-3">
          <i className="bi bi-speedometer2" style={{ fontSize: '1.5rem', color: '#0d6efd' }}></i>
        </Nav.Link>
        <Nav.Link href="#money" className="py-3">
          <i className="bi bi-currency-dollar" style={{ fontSize: '1.5rem', color: '#6c757d' }}></i>
        </Nav.Link>
        <Nav.Link href="#tools" className="py-3">
          <i className="bi bi-tools" style={{ fontSize: '1.5rem', color: '#6c757d' }}></i>
        </Nav.Link>
        <Nav.Link href="#window" className="py-3">
          <i className="bi bi-window" style={{ fontSize: '1.5rem', color: '#6c757d' }}></i>
        </Nav.Link>
        <Nav.Link href="#graph" className="py-3">
          <i className="bi bi-graph-up" style={{ fontSize: '1.5rem', color: '#6c757d' }}></i>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;