import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuctionPage from './pages/AuctionPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auction" element={<AuctionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
