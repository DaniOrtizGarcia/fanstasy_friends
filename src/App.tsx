import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/home/home';
import { UploadExcelPage } from './pages/upload-excel/upload-excel';
import './App.css'

function App() {
  // Usar HashRouter solo en producción (GitHub Pages)
  const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;
  
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/upload-excel" element={<UploadExcelPage />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  )
}

export default App;
