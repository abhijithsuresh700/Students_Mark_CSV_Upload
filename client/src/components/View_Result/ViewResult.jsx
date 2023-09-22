import "./viewResult.css";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from "../../utils/config";

const ViewResult = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axiosInstance.get(`/students/${id}/result`).then((response) => {
      setStudent(response.data);
    });
  }, [id]);

  return (
    <div className="result-container">
      <h2 className="result-title">View Student Result</h2>
      {student ? (
        <div>
          <p className="result-info">Name: {student.name}</p>
          <p className="result-info">Result Status: {student.resultStatus}</p>
        </div>
      ) : (
        <p className="result-loading">Loading...</p>
      )}
    </div>
  );
};

export default ViewResult;
