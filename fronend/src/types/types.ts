// Common types used across components
export interface Server {
    name: string;
  }
  
  export interface FormData {
    implementationGroup: string;
    description: string;
    applicationName: string;
    environment: string;
    servers: Server[];
    patchSchedule: {
      startTime: string;
      endTime: string;
      recurring: boolean;
    };
    approvalRequired: {
      patching: boolean;
      reboot: boolean;
    };
    manualTrigger: {
      patching: boolean;
      reboot: boolean;
    };
    changeRequestType: string;
    changeOwner: string;
    service: string;
    assignmentGroup: string;
    changeRequestRequired: boolean;
  }
  
  export interface HeaderProps {
    onTabChange: (tab: string) => void;
    activeTab: string;
  }
  
  export interface DashboardTileProps {
    title: string;
    value: string;
    showChart: boolean;
    chartType: 'doughnut' | 'overdue' | 'patch-details' | 'status-bars' | 'horizontal-bar' | 'table' | 'patch-status-table';
  }
  
  export interface TableDataItem {
    id: string;
    date: string;
    owner: string;
    title: string;
    resources: string;
  }
  
  export interface PatchStatusDataItem {
    provider: string;
    os: string;
    resourceName: string;
    patchGroup: string;
    status: string;
    startDate: string;
    endDate: string;
    change: string;
    environment: string;
    scanDate: string;
  }