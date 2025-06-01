import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import IssuesPage from './pages/IssuesPage';
import RulesPage from './pages/RulesPage';
import ChallengesPage from './pages/ChallengesPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issues" element={<IssuesPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
