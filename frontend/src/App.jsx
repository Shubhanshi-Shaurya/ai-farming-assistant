import React, { useState, useEffect } from 'react';
import HomeTab from './components/HomeTab';
import CattleClassifier from "./components/cattle_classifier";


const baseContent = {
  navTitle: "AI Farming Assistant",
  tabHome: "Home",
  tabForm: "Optimization Form",
  tabDashboard: "Analytics Dashboard",
  tabPlant:"Plant Disease Classifier",
  tabCattle:"Cattle Classifier",
  tabContact:"Contact Us",
  heroHeading: "Empowering Indian Farmers with Science-Guided AI Decision Support",
  heroSubheading: "Get real-time satellite soil analytics, hyper-localized weather risk matrices, and live scraped market price insights instantly.",
  ctaButton: "Launch Decision Engine",
  footer: "© 2026 AI Farming Assistant Decision Support System. Developed for Sustainable Agriculture and Farming."
};

function MainLayout(){
    const [darkMode,setDarkMode]=useState(false);
    const [activeTab,setActiveTab]=useState('home');
    const [lang,setLang]=useState('en-IN');
    const [languagesList, setLanguagesList] = useState([]);
    const [content, setContent] = useState(baseContent);
    const [isTranslating, setIsTranslating] = useState(false);

    useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

}

function App() {
  return <CattleClassifier />;
}

export default App;