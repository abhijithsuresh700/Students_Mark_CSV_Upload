import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadCSV from "./components/Upload/UploadCSV";
import ViewResult from "./components/View_Result/ViewResult";
import StudentsList from "./components/Students_List/StudentsList";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadCSV />} />
        <Route path="/students/:id/result" element={<ViewResult />} />
        <Route path="/students" element={<StudentsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
