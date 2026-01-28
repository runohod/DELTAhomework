import React, { useState } from 'react';
import { mockData } from './data/mockData';
import DashboardTable from './components/DashboardTable';
import AnalyticsChart from './components/AnalyticsChart';
import './App.css'; 

function App() {
  const [selectedRow, setSelectedRow] = useState(mockData[0]);

  return (
    <div className="app-container">
      <div className="card">
        <div className="chart-header">
            <h3>{selectedRow.title}</h3>
            <span className="current-val">{selectedRow.current.toLocaleString()} руб</span>
        </div>
        <AnalyticsChart data={selectedRow.chartData} />
        <DashboardTable 
          data={mockData} 
          onRowClick={setSelectedRow} 
          activeId={selectedRow.id} 
        />
      </div>
    </div>
  );
}

export default App;