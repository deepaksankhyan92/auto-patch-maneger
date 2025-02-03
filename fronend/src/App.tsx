import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardTiles from './components/DashboardTiles';
import ImplementationForm from './components/ImplementationForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div className=''>
      <Header onTabChange={handleTabChange} activeTab={activeTab} />
      <Sidebar />
      <div style={{ marginLeft: '60px', marginTop: '70px', padding: '20px' }}>
        {activeTab === 'dashboard' && <DashboardTiles />}
        {activeTab === 'chat' && <ImplementationForm />}
      </div>
    </div>
  );
};

export default App;