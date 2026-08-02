import React from 'react';

const Navbar = ({ activeTab, setActiveTab, darkMode, setDarkMode, content }) => {
  const isDark = darkMode;

  // Header Container Style
  const headerStyle = {
    backgroundColor: isDark ? '#1e293b' : '#047857',
    color: '#ffffff',
    padding: '12px 24px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    transition: 'background-color 0.3s ease'
  };

  const navContainerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px'
  };

  const brandStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer'
  };

  const brandTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0,
    color: '#ffffff'
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexWrap: 'wrap'
  };

  // Helper function for active/inactive button styles
  const getBtnStyle = (tabKey, isAuth = false) => {
    const isActive = activeTab === tabKey;
    
    if (isAuth) {
      return {
        backgroundColor: isActive 
          ? '#10b981' 
          : (tabKey === 'signin' ? '#059669' : 'rgba(255, 255, 255, 0.15)'),
        color: '#ffffff',
        border: tabKey === 'login' ? '1px solid rgba(255, 255, 255, 0.4)' : 'none',
        padding: '7px 14px',
        borderRadius: '6px',
        fontSize: '13px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      };
    }

    return {
      backgroundColor: isActive
        ? (isDark ? '#334155' : '#065f46')
        : 'transparent',
      color: '#ffffff',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: isActive ? 'bold' : '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: isActive ? 'inset 0 0 0 1px rgba(255,255,255,0.2)' : 'none'
    };
  };

  const themeToggleStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '6px 10px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
    marginLeft: '4px'
  };

  return (
    <header style={headerStyle}>
      <div style={navContainerStyle}>
        
        {/* Brand / Logo */}
        <div style={brandStyle} onClick={() => setActiveTab('home')}>
          <span style={{ fontSize: '24px' }}>🌾</span>
          <h1 style={brandTitleStyle}>{content?.navTitle || "AI Farming Assistant"}</h1>
        </div>

        {/* Navigation Tabs */}
        <nav style={navLinksStyle}>
          <button
            onClick={() => setActiveTab('home')}
            style={getBtnStyle('home')}
          >
             Home
          </button>

          <button
            onClick={() => setActiveTab('crop')}
            style={getBtnStyle('crop')}
          >
             Crop Recommender
          </button>

          <button
            onClick={() => setActiveTab('plant')}
            style={getBtnStyle('plant')}
          >
             Plant Disease
          </button>

          <button
            onClick={() => setActiveTab('cattle')}
            style={getBtnStyle('cattle')}
          >
             Cattle Classifier
          </button>

          <button
            onClick={() => setActiveTab('about')}
            style={getBtnStyle('about')}
          >
            About Us
          </button>

          {/* Auth Action Buttons */}
          <button
            onClick={() => setActiveTab('login')}
            style={getBtnStyle('login', true)}
          >
             Login
          </button>

          <button
            onClick={() => setActiveTab('signin')}
            style={getBtnStyle('signin', true)}
          >
             Sign In
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={themeToggleStyle}
            title="Toggle Light/Dark Theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;