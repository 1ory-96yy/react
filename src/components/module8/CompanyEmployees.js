import React from 'react';

const CompanyEmployees = ({ company, employees }) => {
  return (
    <div>
      <h2>{company.name}</h2>
      <p><strong>Location:</strong> {company.location}</p>
      <h3>Employees:</h3>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyEmployees;