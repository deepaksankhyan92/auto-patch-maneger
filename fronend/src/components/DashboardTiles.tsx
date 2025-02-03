import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardTile from './DashboardTile';
import { DashboardTileProps } from '../types/types';

const DashboardTiles: React.FC = () => {
  const tiles: DashboardTileProps[] = [
    {
      title: 'Patching Status',
      value: 'System Status',
      showChart: true,
      chartType: 'doughnut'
    },
    {
      title: 'Overdue Status',
      value: 'Overdue',
      showChart: true,
      chartType: 'overdue'
    },
    {
      title: 'Patch Details',
      value: 'System Updates',
      showChart: true,
      chartType: 'patch-details'
    },
    {
      title: 'Status Bars',
      value: 'Progress',
      showChart: true,
      chartType: 'status-bars'
    },
    {
      title: 'Service Status',
      value: 'Services',
      showChart: true,
      chartType: 'horizontal-bar'
    },
    {
      title: 'Change Requests',
      value: 'Recent Changes',
      showChart: true,
      chartType: 'table'
    },
    {
      title: 'Patch Status Details',
      value: 'Detailed Status',
      showChart: true,
      chartType: 'patch-status-table'
    }
  ];

  return (
    <Container fluid className="mt-4">
      <Row className="g-4">
        {/* First row of tiles */}
        <Col md={4}>
          <DashboardTile {...tiles[0]} />
        </Col>
        <Col md={4}>
          <DashboardTile {...tiles[1]} />
        </Col>
        <Col md={4}>
          <DashboardTile {...tiles[2]} />
        </Col>

        {/* Second row of tiles */}
        <Col md={4}>
          <DashboardTile {...tiles[3]} />
        </Col>
        <Col md={4}>
          <DashboardTile {...tiles[4]} />
        </Col>
        <Col md={4}>
          <DashboardTile {...tiles[5]} />
        </Col>

        {/* Full width tile at the bottom */}
        <Col xs={12}>
          <DashboardTile {...tiles[6]} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardTiles;