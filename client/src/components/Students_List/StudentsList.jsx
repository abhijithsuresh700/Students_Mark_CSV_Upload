import React, { useState, useEffect } from 'react';
import "./studentsList.css";
import { axiosInstance } from '../../utils/config';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [resultStatus, setResultStatus] = useState('passed');

  useEffect(() => {
    axiosInstance.get(`/students?resultStatus=${resultStatus}`).then((response) => {
      setStudents(response.data);
    });
  }, [resultStatus]);

  return (
    <div className="list-container">
      <h2 className="list-title">List of Students</h2>
      <div className="list-filter">
        <label className="filter-label">Show students who:</label>
        <select
          className="filter-select"
          value={resultStatus}
          onChange={(e) => setResultStatus(e.target.value)}
        >
          <option value="passed">Passed</option>
          <option value="failed">Failed</option>
        </select>
      </div>
      <ul className="list">
        {students.map((student) => (
          <li key={student._id}>
            <a className="list-link" href={`/students/${student._id}/result`}>
              {student.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
