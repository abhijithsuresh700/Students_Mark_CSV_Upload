import React from 'react';
import "./homePage.css"

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Student Results App</h1>
      <p className="home-description">
        This application allows you to manage student results, including uploading CSV files and viewing student results.
      </p>
      <p className="home-start">Get started with the following options:</p>
      <ul className="home-options">
        <li className="home-option">
          <a href="/upload" className="home-link">
            Upload CSV - Upload a CSV file with student data.
          </a>
        </li>
        <li className="home-option">
          <a href="/students" className="home-link">
            List Students - View and filter students based on their result status.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;