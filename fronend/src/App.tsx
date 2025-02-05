import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardTiles from './components/DashboardTiles';
import ImplementationForm from './components/ImplementationForm';
import PatchOnboardingTwoForm from './components/PatchOnboardingTwoForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const handleTabChange = (tab: string): void => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      <Header onTabChange={handleTabChange} activeTab={activeTab} />
      <Sidebar />
      <div style={{ marginLeft: '60px', marginTop: '70px', padding: '20px' }}>
        {activeTab === 'dashboard' && <DashboardTiles />}
        {activeTab === 'chat' && <ImplementationForm />}
        {activeTab === 'request' && <PatchOnboardingTwoForm />}
      </div>
    </div>
  );
};

export default App;