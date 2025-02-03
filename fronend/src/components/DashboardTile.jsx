import React from 'react';
import { Card } from 'react-bootstrap';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardTile = ({ title, value, showChart, chartType }) => {
  const doughnutData = {
    labels: ['Windows', 'Linux', 'Ubuntu'],
    datasets: [{
      data: [90, 85, 80],
      backgroundColor: [
        'rgba(147, 51, 234, 0.9)',
        'rgba(99, 102, 241, 0.9)',
        'rgba(59, 130, 246, 0.9)',
      ],
      borderWidth: 0,
    }]
  };

  const overdueData = {
    labels: [''],
    datasets: [
      {
        label: '> 1 Month',
        data: [178],
        backgroundColor: 'rgb(255, 0, 0)',
        barThickness: 15,
      },
      {
        label: '< 1 Month',
        data: [62],
        backgroundColor: 'rgb(255, 140, 0)',
        barThickness: 15,
      },
      {
        label: '< 1 Week',
        data: [57],
        backgroundColor: 'rgb(255, 255, 0)',
        barThickness: 15,
      },
      {
        label: '< 1 Day',
        data: [111],
        backgroundColor: 'rgb(0, 255, 0)',
        barThickness: 15,
      },
    ]
  };

  const patchDetailsData = {
    labels: ['OS Patch', 'Security Patch', 'Bug Fix', 'OS Patch', 'Feature Update', 'OS Patch'],
    datasets: [{
      data: [86, 39, 39, 148, 18, 97],
      backgroundColor: '#0d6efd',
      barThickness: 20,
    }]
  };

  const statusBarsData = {
    labels: ['CR Created', 'Approved', 'CAB', 'Scheduled', 'Completed'],
    datasets: [{
      data: [100, 85, 75, 65, 90],
      backgroundColor: [
        'rgba(147, 51, 234, 0.9)',
        'rgba(99, 102, 241, 0.9)',
        'rgba(59, 130, 246, 0.9)',
        'rgba(147, 51, 234, 0.7)',
        'rgba(99, 102, 241, 0.7)',
      ],
      barThickness: 40,
    }]
  };

  const horizontalBarData = {
    labels: [
      'Big Panda',
      'Resolve',
      'Cloud 360',
      'Zenoss',
      'Jira',
      'VPN',
      'Data Base',
      'Jump Server',
      'Reporting',
      'CRM App'
    ],
    datasets: [{
      data: [65, 45, 35, 85, 45, 55, 70, 35, 15, 20],
      backgroundColor: [
        '#2196F3',
        '#4CAF50',
        '#FF9800',
        '#2196F3',
        '#FF9800',
        '#2196F3',
        '#FF9800',
        '#4CAF50',
        '#2196F3',
        '#FF9800'
      ],
      barThickness: 15,
    }]
  };

  const tableData = [
    {
      id: 'CR0123456',
      date: '20-06-2022 22:37:00',
      owner: 'Tony Stark',
      title: 'App Server Patching',
      resources: 'Resources: accdb, billing-ch, cfncall'
    },
    {
      id: 'CR0123456',
      date: '20-06-2022 22:37:00',
      owner: 'Steve Rogers',
      title: 'Web Servers Patching',
      resources: 'Resources: test-wpp, Apache, JWttest'
    },
    {
      id: 'CR0123456',
      date: '20-06-2022 22:37:00',
      owner: 'NatashaRomanof',
      title: 'Critical Security Patching',
      resources: 'Resources: demolamp1, Webserver, te'
    },
    {
      id: 'CR0123456',
      date: '20-06-2022 22:37:00',
      owner: 'NatashaRomanof',
      title: 'Windows Feature Updates',
      resources: 'Resources: Loadbak, testserver, te'
    }
  ];

  const patchStatusData = [
    {
      provider: 'AWS',
      os: 'Windows 2012R',
      resourceName: 'bucktfrcorrent',
      patchGroup: 'OS Patch',
      status: 'Completed',
      startDate: '17-07-2023 22:37:00',
      endDate: '17-07-2023 23:37:00',
      change: 'CR0123456',
      environment: 'Development',
      scanDate: '27-06-2023 23:37:00'
    },
    {
      provider: 'AWS',
      os: 'RHEL - 8',
      resourceName: 'cf-templates-3096ooa',
      patchGroup: 'Bug Fix',
      status: 'Scheduled',
      startDate: '20-07-2023 22:37:00',
      endDate: '20-07-2023 23:37:00',
      change: 'CR0123456',
      environment: 'Production',
      scanDate: '27-06-2023 23:37:00'
    },
    {
      provider: 'VM Ware',
      os: 'Ubuntu',
      resourceName: 'elasticbeanstalk-ap-so',
      patchGroup: 'OS Patch',
      status: 'Rejected',
      startDate: '06-07-2023 22:37:00',
      endDate: '06-07-2023 23:37:00',
      change: 'CR0123456',
      environment: 'QA-Test',
      scanDate: '27-06-2023 23:37:00'
    },
    {
      provider: 'DC-UK',
      os: 'Windows 8',
      resourceName: 'inactiveusertest',
      patchGroup: 'Critical Patch',
      status: 'Excluded',
      startDate: '20-07-2023 22:37:00',
      endDate: '20-07-2023 23:37:00',
      change: 'CR0123456',
      environment: 'Production',
      scanDate: '27-06-2023 23:37:00'
    },
    {
      provider: 'Azure',
      os: 'Windows 2012',
      resourceName: 'monitoringresources',
      patchGroup: 'Bug Fix',
      status: 'Failed',
      startDate: '20-07-2023 22:37:00',
      endDate: '20-07-2023 23:37:00',
      change: 'CR0123456',
      environment: 'DR',
      scanDate: '27-06-2023 23:37:00'
    },
    {
      provider: 'GCP',
      os: 'Linux',
      resourceName: 's3-json-outlevent',
      patchGroup: 'OS Patch',
      status: 'In Progress',
      startDate: '20-07-2023 22:37:00',
      endDate: '20-07-2023 23:37:00',
      change: 'CR0123456',
      environment: 'Production',
      scanDate: '27-06-2023 23:37:00'
    }
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };

  const horizontalBarOptions = {
    ...chartOptions,
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };

  const doughnutOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 10,
          padding: 15
        }
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'scheduled':
        return 'primary';
      case 'rejected':
        return 'danger';
      case 'excluded':
        return 'warning';
      case 'failed':
        return 'danger';
      case 'in progress':
        return 'info';
      default:
        return 'secondary';
    }
  };

  const renderChart = () => {
    switch (chartType) {
      case 'doughnut':
        return <Doughnut data={doughnutData} options={doughnutOptions} />;
      case 'overdue':
        return (
          <div className="position-relative">
            <Bar data={overdueData} options={chartOptions} />
            <div className="d-flex justify-content-between position-absolute" style={{ bottom: 20, left: 20, right: 20 }}>
              <div className="text-danger" style={{ fontSize: '24px', fontWeight: 'bold' }}>178</div>
              <div style={{ color: '#ff8c00', fontSize: '24px', fontWeight: 'bold' }}>62</div>
              <div style={{ color: '#FFD700', fontSize: '24px', fontWeight: 'bold' }}>57</div>
              <div className="text-success" style={{ fontSize: '24px', fontWeight: 'bold' }}>111</div>
            </div>
            <div className="d-flex justify-content-between position-absolute" style={{ bottom: 0, left: 20, right: 20, fontSize: '12px' }}>
              <div className="text-danger">&gt; 1 Month</div>
              <div style={{ color: '#ff8c00' }}>&lt; 1 Month</div>
              <div style={{ color: '#FFD700' }}>&lt; 1 Week</div>
              <div className="text-success">&lt; 1 Day</div>
            </div>
          </div>
        );
      case 'patch-details':
        return (
          <div className="patch-details">
            <div className="d-flex align-items-center mb-3">
              <img src="windows-logo.png" alt="Windows" className="me-2" style={{ width: 24, height: 24 }} />
              <div>
                <div className="d-flex justify-content-between">
                  <span>OS Patch</span>
                  <span className="text-primary">86 Patched - 124 Scheduled</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Security Patch</span>
                  <span className="text-primary">39 Patched - 134 Scheduled</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Bug Fix</span>
                  <span className="text-primary">39 Patched - 556 Scheduled</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src="redhat-logo.png" alt="RedHat" className="me-2" style={{ width: 24, height: 24 }} />
              <div>
                <div className="d-flex justify-content-between">
                  <span>OS Patch</span>
                  <span className="text-primary">148 Patched - 124 Scheduled</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Feature Update</span>
                  <span className="text-primary">18 Patched - 24 Scheduled</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src="ubuntu-logo.png" alt="Ubuntu" className="me-2" style={{ width: 24, height: 24 }} />
              <div>
                <div className="d-flex justify-content-between">
                  <span>OS Patch</span>
                  <span className="text-primary">97 Patched - 387 Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'status-bars':
        return <Bar data={statusBarsData} options={chartOptions} />;
      case 'horizontal-bar':
        return <Bar data={horizontalBarData} options={horizontalBarOptions} />;
      case 'table':
        return (
          <div className="table-responsive" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <table className="table table-borderless">
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between">
                          <span className="text-primary">{row.id}</span>
                          <span className="text-muted">{row.date}</span>
                          <span className="text-primary">{row.owner}</span>
                        </div>
                        <div className="mt-1">
                          <div>{row.title}</div>
                          <small className="text-muted">{row.resources}</small>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'patch-status-table':
        return (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>OS</th>
                  <th>Resource Name</th>
                  <th>Patch Group</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Change</th>
                  <th>Environment</th>
                  <th>Scan Date</th>
                </tr>
              </thead>
              <tbody>
                {patchStatusData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.provider}</td>
                    <td>{row.os}</td>
                    <td>{row.resourceName}</td>
                    <td>{row.patchGroup}</td>
                    <td>
                      <span className={`badge bg-${getStatusColor(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>{row.startDate}</td>
                    <td>{row.endDate}</td>
                    <td>{row.change}</td>
                    <td>{row.environment}</td>
                    <td>{row.scanDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <h6 className="text-muted mb-3">{title}</h6>
        <div style={{ height: chartType === 'patch-status-table' ? 'auto' : '300px' }}>
          {renderChart()}
        </div>
      </Card.Body>
    </Card>
  );
};

export default DashboardTile;