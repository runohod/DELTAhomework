import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AnalyticsChart = ({ data }) => {
  const formattedData = data.map((val, i) => ({ name: i, value: val }));

  return (
    <div style={{ width: '100%', height: 300, padding: '10px 20px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="name" axisLine={true} tickLine={false} stroke="#888" />
          <YAxis axisLine={true} tickLine={false} stroke="#888" domain={['auto', 'auto']} />
          <Tooltip contentStyle={{ borderRadius: '8px' }} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#1d7a52" 
            strokeWidth={3} 
            dot={{ r: 5, fill: '#1d7a52', stroke: '#fff', strokeWidth: 2 }} 
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;