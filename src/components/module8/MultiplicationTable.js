import React from 'react';
import './MultiplicationTable.css'

const MultiplicationTable = ({ rows = 10, cols = 10 }) => {
  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= rows; i++) {
      const row = [];
      for (let j = 1; j <= cols; j++) {
        row.push(<td key={j}>{i * j}</td>);
      }
      table.push(<tr key={i}>{row}</tr>);
    }
    return table;
  };

  return (
    <table className="multiplication-table">
      <tbody>{generateTable()}</tbody>
    </table>
  );
};

export default MultiplicationTable;