import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ResumeUpload from "./pages/ResumeUpload";
import DataInput from "./pages/DataInput";
import Preview from "./pages/Preview";
import NoPage from "./pages/NoPage";
import StyleSelection from "./pages/StyleSelection";
import './App.css'

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume_upload" element={<ResumeUpload />} />
        <Route path="/data_input" element={<DataInput />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/style_selection" element={<StyleSelection />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </main>
  );
}
