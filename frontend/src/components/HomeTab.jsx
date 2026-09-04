import React from 'react';
import {
  Target,
  ArrowRight,
  Sprout,
  CloudSun,
  Activity,
  ShieldCheck,
  Brain,
  MapPin
} from 'lucide-react';

export default function HomeTab({ content, setActiveTab }) {

  const featureCardStyle = {
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: '1px solid var(--border, #e2e8f0)',
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'left',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
  };

  const iconBoxStyle = {
    width: '46px',
    height: '46px',
    borderRadius: '12px',
    backgroundColor: 'rgba(5, 150, 105, 0.1)',
    color: 'var(--primary, #059669)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px'
  };

  return (
    <div className="animate-fade">

      {/* HERO SECTION */}
      <section
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '70px 20px 60px'
        }}
      >

        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            backgroundColor: 'rgba(5, 150, 105, 0.08)',
            color: 'var(--primary, #059669)',
            fontSize: '12px',
            fontWeight: '700',
            padding: '7px 14px',
            borderRadius: '999px',
            border: '1px solid rgba(5, 150, 105, 0.15)',
            marginBottom: '22px'
          }}
        >
          <Target size={14} />
          AI-Powered Farming Assistant
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: 'clamp(2.3rem, 5vw, 4rem)',
            fontWeight: '900',
            margin: '0 0 20px',
            maxWidth: '900px',
            lineHeight: '1.1',
            letterSpacing: '-1px'
          }}
        >
          {content?.heroHeading ||
            'Empowering Farmers with AI-Powered Agricultural Intelligence'}
        </h1>

        {/* Description */}
        <p
          style={{
            color: 'var(--text-muted, #64748b)',
            fontSize: '1.1rem',
            margin: '0 auto 30px',
            maxWidth: '700px',
            lineHeight: '1.7'
          }}
        >
          {content?.heroSubheading ||
            'Make smarter farming decisions with intelligent crop recommendations, yield prediction, plant disease detection, cattle classification and weather-based insights.'}
        </p>

        {/* CTA */}
        <button
          onClick={() => setActiveTab('crop')}
          style={{
            backgroundColor: 'var(--primary, #059669)',
            color: 'white',
            border: 'none',
            fontWeight: '700',
            padding: '13px 24px',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '15px',
            boxShadow: '0 6px 14px rgba(5,150,105,0.2)'
          }}
        >
          Explore Crop Recommender
          <ArrowRight size={17} />
        </button>

      </section>


      {/* INTRODUCTION */}
      <section style={{ padding: '20px 10px 55px' }}>

        <div
          style={{
            textAlign: 'center',
            maxWidth: '750px',
            margin: '0 auto 35px'
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '12px'
            }}
          >
            One Platform for Smarter Farming
          </h2>

          <p
            style={{
              color: 'var(--text-muted, #64748b)',
              lineHeight: '1.7',
              margin: 0
            }}
          >
            AI Farming Assistant brings multiple agricultural intelligence
            tools together in one platform, helping farmers make
            data-driven decisions at every stage of farming.
          </p>
        </div>


        {/* FEATURE CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px'
          }}
        >

          {/* Crop Recommender */}
          <div style={featureCardStyle}>
            <div style={iconBoxStyle}>
              <Sprout size={24} />
            </div>

            <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>
              Crop Recommender
            </h3>

            <p
              style={{
                color: 'var(--text-muted, #64748b)',
                fontSize: '14px',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Get intelligent crop recommendations based on soil,
              location, season and environmental conditions.
            </p>
          </div>


          {/* Weather */}
          <div style={featureCardStyle}>
            <div style={iconBoxStyle}>
              <CloudSun size={24} />
            </div>

            <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>
              Weather Insights
            </h3>

            <p
              style={{
                color: 'var(--text-muted, #64748b)',
                fontSize: '14px',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Use location-based weather information to understand
              environmental conditions affecting your crops.
            </p>
          </div>


          {/* Yield Predictor */}
          <div style={featureCardStyle}>
            <div style={iconBoxStyle}>
              <Activity size={24} />
            </div>

            <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>
              Yield Prediction
            </h3>

            <p
              style={{
                color: 'var(--text-muted, #64748b)',
                fontSize: '14px',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Estimate expected crop yield using machine learning
              models trained on historical agricultural data.
            </p>
          </div>


          {/* Disease */}
          <div style={featureCardStyle}>
            <div style={iconBoxStyle}>
              <ShieldCheck size={24} />
            </div>

            <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>
              Plant Disease Detection
            </h3>

            <p
              style={{
                color: 'var(--text-muted, #64748b)',
                fontSize: '14px',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Upload plant images and use AI-based image classification
              to identify potential plant diseases.
            </p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section
        style={{
          padding: '55px 10px',
          borderTop: '1px solid var(--border, #e2e8f0)'
        }}
      >

        <div
          style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '12px'
            }}
          >
            How It Works
          </h2>

          <p
            style={{
              color: 'var(--text-muted, #64748b)',
              lineHeight: '1.6'
            }}
          >
            Simple inputs. Intelligent analysis. Better farming decisions.
          </p>
        </div>


        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '25px',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >

          <div style={{ textAlign: 'center' }}>
            <div style={{
              ...iconBoxStyle,
              margin: '0 auto 15px'
            }}>
              <MapPin size={23} />
            </div>

            <h3 style={{ marginBottom: '8px' }}>
              1. Enter Your Details
            </h3>

            <p
              style={{
                color: 'var(--text-muted, #64748b)',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              Provide your location, soil and farming information.
            </p>
          </div>


          <div style={{ textAlign: 'center' }}>
            <div style={{
              ...iconBoxStyle,
              margin: '0 auto 15px'
            }}>
              <Brain size={23} />
            </div>

            <h3 style={{ marginBottom: '8px' }}>
              2. AI Analyzes
            </h3>

            <p
              style={{
                color: 'var(--text-muted, #64748b)',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              Our machine learning models analyze the available
              agricultural and environmental data.
            </p>
          </div>


          <div style={{ textAlign: 'center' }}>
            <div style={{
              ...iconBoxStyle,
              margin: '0 auto 15px'
            }}>
              <Sprout size={23} />
            </div>

            <h3 style={{ marginBottom: '8px' }}>
              3. Get Insights
            </h3>

            <p
              style={{
                color: 'var(--text-muted, #64748b)',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              Receive actionable recommendations to support your
              farming decisions.
            </p>
          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section
        style={{
          margin: '45px 10px 20px',
          padding: '45px 25px',
          borderRadius: '20px',
          backgroundColor: 'rgba(5, 150, 105, 0.08)',
          border: '1px solid rgba(5, 150, 105, 0.15)',
          textAlign: 'center'
        }}
      >

        <h2
          style={{
            fontSize: '1.9rem',
            fontWeight: '800',
            marginBottom: '12px'
          }}
        >
          Ready to Make Smarter Farming Decisions?
        </h2>

        <p
          style={{
            color: 'var(--text-muted, #64748b)',
            maxWidth: '600px',
            margin: '0 auto 25px',
            lineHeight: '1.6'
          }}
        >
          Start with our AI-powered Crop Recommender and explore
          the agricultural intelligence tools available on the platform.
        </p>

        <button
          onClick={() => setActiveTab('crop')}
          style={{
            backgroundColor: 'var(--primary, #059669)',
            color: '#ffffff',
            border: 'none',
            fontWeight: '700',
            padding: '12px 22px',
            borderRadius: '9px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px'
          }}
        >
          Get Started
          <ArrowRight size={16} />
        </button>

      </section>

    </div>
  );
}