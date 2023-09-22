import React, { useState } from "react";
import "./uploadCSV.css";
import { axiosInstance } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("csvFile", file);

    try {
      await axiosInstance.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("CSV file uploaded successfully");
      navigate("/")
      
    } catch (error) {
      console.error(error);
      alert("Upload failed");
      navigate("/")
    }
  };
  return (
    <div className="uploadContainer">
      <h2 className="uploadTitle">Upload CSV file of Students Marks</h2>
      <input
        type="file"
        name="csvFile"
        accept=".csv"
        onChange={handleFileChange}
        className="uploadInput"
      />
      <button onClick={handleUpload} className="uploadButton">Upload</button>
    </div>
  );
};

export default UploadCSV;
