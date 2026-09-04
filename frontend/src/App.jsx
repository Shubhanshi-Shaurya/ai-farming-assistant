import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeTab from './components/HomeTab';
import CattleClassifier from "./components/cattle_classifier";
import DiseaseUploader from "./components/disease_classifier";
import ChatbotWidget from './components/ChatbotWidget';
import CropRecommender from './components/CropRecommender';
import AboutUs from './components/AboutUs';

const baseContent = {
  navTitle: "AI Farming Assistant",
  tabHome: "Home",
  tabForm: "Optimization Form",
  tabDashboard: "Analytics Dashboard",
  tabPlant: "Plant Disease Classifier",
  tabCattle: "Cattle Classifier",
  tabContact: "Contact Us",
  heroHeading: "Empowering Indian Farmers with Science-Guided AI Decision Support",
  heroSubheading: "Get real-time satellite soil analytics, hyper-localized weather risk matrices, and live scraped market price insights instantly.",
  ctaButton: "Launch Decision Engine",
  footer: "© 2026 AI Farming Assistant Decision Support System. Developed for Sustainable Agriculture and Farming."
};

function MainLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [content] = useState(baseContent);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const pageContainerStyle = {
    backgroundColor: darkMode ? '#0f172a' : '#f8fafc',
    color: darkMode ? '#f8fafc' : '#1e293b',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const mainContentStyle = {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '32px 16px',
    flex: 1,
    boxSizing: 'border-box'
  };

  return (
    <div style={pageContainerStyle}>
      {/* Integrated Navbar Component */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        content={content}
      />

      {/* Dynamic Main Body */}
      <main style={mainContentStyle}>
        {activeTab === 'home' && (
          <HomeTab
            content={content}
            setActiveTab={setActiveTab}
          />
        )}

        {/* tabs for navigation */}

        {activeTab === 'plant' && <DiseaseUploader />}
        {activeTab === 'cattle' && <CattleClassifier />}
        {activeTab === 'crop' && <CropRecommender />}
        {activeTab === 'about' && <AboutUs />}
      </main>

      {/* Footer */}
      <footer style={{
        padding: '20px',
        textAlign: 'center',
        fontSize: '13px',
        borderTop: '1px solid ' + (darkMode ? '#334155' : '#e2e8f0'),
        backgroundColor: darkMode ? '#1e293b' : '#ffffff',
        marginTop: 'auto'
      }}>
        <p>{content.footer}</p>
      </footer>
      {/* chatbot widget */}
      <ChatbotWidget />
    </div>
  );
}

function App() {
  return <MainLayout />;
}

export default App;