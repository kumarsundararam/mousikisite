import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import Home from './pages/Home';
import ForTeachers from './pages/ForTeachers';
import ForSchools from './pages/ForSchools';
import ForStudents from './pages/ForStudents';
import ForParents from './pages/ForParents';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Schedule from './pages/Schedule';
import Billing from './pages/Billing';
import Reports from './pages/Reports';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

function NavigationBar() {
  const { t } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="logo">
            <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img 
                src="/images/mouiski_logo_small_opt.png" 
                alt="Mousiki Logo" 
                style={{ 
                  height: '50px', 
                  width: 'auto',
                  objectFit: 'contain'
                }} 
              />
            </Link>
          </div>

          {/* Navigation and Language Selector Container */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Hamburger Menu Button for Mobile */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>

            <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>{t('nav.home')}</Link>
              <div style={{ position: 'relative' }}>
                <button 
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  onClick={() => setShowDropdown(!showDropdown)}
                  style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    color: 'white', 
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    borderRadius: '5px'
                  }}
                >
                  {t('nav.solutions')} ▼
                </button>
                {showDropdown && (
                  <div 
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      background: 'white',
                      borderRadius: '5px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      minWidth: '200px',
                      zIndex: 1000
                    }}
                  >
                    <Link to="/for-teachers" onClick={() => { setShowDropdown(false); setMobileMenuOpen(false); }} style={{ 
                      display: 'block', 
                      padding: '1rem', 
                      color: '#333', 
                      textDecoration: 'none',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      {t('nav.forTeachers')}
                    </Link>
                    <Link to="/for-schools" onClick={() => { setShowDropdown(false); setMobileMenuOpen(false); }} style={{ 
                      display: 'block', 
                      padding: '1rem', 
                      color: '#333', 
                      textDecoration: 'none',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      {t('nav.forSchools')}
                    </Link>
                    <Link to="/for-students" onClick={() => { setShowDropdown(false); setMobileMenuOpen(false); }} style={{ 
                      display: 'block', 
                      padding: '1rem', 
                      color: '#333', 
                      textDecoration: 'none',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      {t('nav.forStudents')}
                    </Link>
                    <Link to="/for-parents" onClick={() => { setShowDropdown(false); setMobileMenuOpen(false); }} style={{ 
                      display: 'block', 
                      padding: '1rem', 
                      color: '#333', 
                      textDecoration: 'none'
                    }}>
                      {t('nav.forParents')}
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>{t('nav.pricing')}</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact')}</Link>
              <Link to="/teachers" onClick={() => setMobileMenuOpen(false)} style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '5px' }}>Dashboard</Link>
            </nav>

            {/* Language Selector */}
            <div style={{ marginLeft: '1rem' }}>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function App() {
  const [userRole, setUserRole] = useState('guest');

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <NavigationBar />

          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/for-teachers" element={<ForTeachers />} />
              <Route path="/for-schools" element={<ForSchools />} />
              <Route path="/for-students" element={<ForStudents />} />
              <Route path="/for-parents" element={<ForParents />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/students" element={<Students />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className="footer">
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h4 style={{ marginBottom: '1rem' }}>Solutions</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link to="/for-teachers" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>For Teachers</Link>
                    <Link to="/for-schools" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>For Schools</Link>
                    <Link to="/for-students" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>For Students</Link>
                    <Link to="/for-parents" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>For Parents</Link>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem' }}>Company</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link to="/about" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>About Us</Link>
                    <Link to="/pricing" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Pricing</Link>
                    <Link to="/contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Contact</Link>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem' }}>Resources</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Blog</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Help Center</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>API Docs</a>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem' }}>Connect</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Twitter</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Facebook</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Instagram</a>
                  </div>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem', textAlign: 'center' }}>
                <p>&copy; 2026 Mousiki. All rights reserved.</p>
                <p style={{ marginTop: '0.5rem' }}>Empowering music education through technology</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
