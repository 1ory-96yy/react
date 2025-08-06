import React from 'react';

const UniversityFaculty = ({ faculty }) => {
  return (
    <div>
      <h2>{faculty.name}</h2>
      <p>Dean: {faculty.dean}</p>
      {faculty.groups.map(group => (
        <div key={group.name} style={{ marginTop: '10px' }}>
          <h4>Group: {group.name}</h4>
          <ul>
            {group.students.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UniversityFaculty;