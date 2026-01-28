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
        <div className="chart-info-header">
            <div className="info-item">
                <span className="info-label">Показатель</span>
                <span className="info-value">{selectedRow.title}</span>
            </div>
            <div className="info-item">
                <span className="info-label">Текущий день</span>
                <span className="info-value highlighted">{selectedRow.current.toLocaleString()} руб</span>
            </div>
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