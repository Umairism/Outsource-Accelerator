import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GuidesPage from './pages/GuidesPage';
import DirectoryPage from './pages/DirectoryPage';
import CalculatorPage from './pages/CalculatorPage';
import BlogPage from './pages/BlogPage';
import PodcastPage from './pages/PodcastPage';
import GlossaryPage from './pages/GlossaryPage';
import ContactPage from './pages/ContactPage';
import GetQuotesPage from './pages/GetQuotesPage';
import BookCallPage from './pages/BookCallPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-quotes" element={<GetQuotesPage />} />
          <Route path="/book-call" element={<BookCallPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;