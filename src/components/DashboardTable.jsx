import React from 'react';

const DashboardTable = ({ data, onRowClick, activeId }) => {
  return (
    <table className="dashboard-table">
      <thead>
        <tr>
          <th>Показатель</th>
          <th className="bg-blue">Текущий день</th>
          <th>Вчера</th>
          <th>Этот день недели</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr 
            key={row.id} 
            onClick={() => onRowClick(row)} 
            className={activeId === row.id ? 'active-row' : ''}
          >
            <td className="title-cell">{row.title}</td>
            <td className="bg-blue-light">{row.current.toLocaleString()}</td>
            <td className={row.percent > 0 ? 'cell-green' : row.percent < 0 ? 'cell-red' : ''}>
              <div className="value-with-badge">
                {row.yesterday.toLocaleString()}
                <span className={`percent-tag ${row.percent > 0 ? 'tag-green' : row.percent < 0 ? 'tag-red' : 'tag-gray'}`}>
                  {row.percent > 0 ? `+${row.percent}%` : `${row.percent}%`}
                </span>
              </div>
            </td>
            <td>{row.week.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashboardTable;