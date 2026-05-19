import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LessonList from './pages/LessonList';
import LessonDetail from './pages/LessonDetail';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>🇨🇳 中国語学習サイト</h1>
          </Link>
          <nav className="nav">
            <Link to="/">ホーム</Link>
          </nav>
        </div>
      </header>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LessonList />} />
          <Route path="/lesson/:id" element={<LessonDetail />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; 2026 中国語学習サイト. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
