import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AnalyticsChart = ({ data }) => {
  const formattedData = data.map((val, i) => ({ name: i, value: val }));

  return (
    <div style={{ width: '100%', height: 250, padding: '20px 0' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis hide />
          <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#1d7a52" strokeWidth={3} dot={{ r: 5, fill: '#1d7a52' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;