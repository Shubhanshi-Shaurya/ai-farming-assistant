
import React from 'react';
import {
    Sprout,
    Brain,
    CloudSun,
    ShieldCheck,
    Beef,
    Target,
    Cpu,
    Users
} from 'lucide-react';

export default function AboutUs({ setActiveTab }) {

    const cardStyle = {
        backgroundColor: 'var(--card-bg, #ffffff)',
        border: '1px solid var(--border, #e2e8f0)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
    };

    const iconStyle = {
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

            {/* HERO */}
            <section
                style={{
                    textAlign: 'center',
                    padding: '65px 20px 50px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
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
                        marginBottom: '20px'
                    }}
                >
                    <Sprout size={14} />
                    About AI Farming Assistant
                </div>

                <h1
                    style={{
                        fontSize: 'clamp(2.3rem, 5vw, 3.7rem)',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        margin: '0 0 18px',
                        maxWidth: '850px',
                        letterSpacing: '-1px'
                    }}
                >
                    Technology for Smarter Farming Decisions
                </h1>

                <p
                    style={{
                        maxWidth: '700px',
                        color: 'var(--text-muted, #64748b)',
                        fontSize: '1.05rem',
                        lineHeight: '1.7',
                        margin: 0
                    }}
                >
                    AI Farming Assistant is a technology-driven agricultural
                    decision support platform designed to bring machine learning,
                    weather information and intelligent analysis together in one
                    easy-to-use system.
                </p>
            </section>


            {/* OUR MISSION */}
            <section style={{ padding: '20px 10px 55px' }}>

                <div
                    style={{
                        ...cardStyle,
                        maxWidth: '900px',
                        margin: '0 auto',
                        textAlign: 'center',
                        padding: '40px 30px'
                    }}
                >
                    <div
                        style={{
                            ...iconStyle,
                            margin: '0 auto 18px'
                        }}
                    >
                        <Target size={24} />
                    </div>

                    <h2
                        style={{
                            fontSize: '1.9rem',
                            fontWeight: '800',
                            marginBottom: '14px'
                        }}
                    >
                        Our Mission
                    </h2>

                    <p
                        style={{
                            color: 'var(--text-muted, #64748b)',
                            lineHeight: '1.8',
                            maxWidth: '750px',
                            margin: '0 auto'
                        }}
                    >
                        Our goal is to make agricultural technology more accessible
                        by providing farmers with useful, data-driven insights through
                        a single platform. Instead of relying on isolated tools,
                        AI Farming Assistant brings crop recommendation, yield
                        prediction, plant disease detection, cattle classification
                        and weather information into one unified experience.
                    </p>
                </div>

            </section>


            {/* WHAT THE PLATFORM DOES */}
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
                        What We Provide
                    </h2>

                    <p
                        style={{
                            color: 'var(--text-muted, #64748b)',
                            lineHeight: '1.7',
                            margin: 0
                        }}
                    >
                        Multiple AI-powered tools designed to support different
                        aspects of agricultural decision-making.
                    </p>
                </div>


                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '18px'
                    }}
                >

                    {/* Crop */}
                    <div style={cardStyle}>
                        <div style={iconStyle}>
                            <Sprout size={24} />
                        </div>

                        <h3 style={{ margin: '0 0 9px' }}>
                            Crop Recommendation
                        </h3>

                        <p
                            style={{
                                color: 'var(--text-muted, #64748b)',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                margin: 0
                            }}
                        >
                            Machine learning-based crop recommendations using
                            agricultural and environmental inputs.
                        </p>
                    </div>


                    {/* Yield */}
                    <div style={cardStyle}>
                        <div style={iconStyle}>
                            <Brain size={24} />
                        </div>

                        <h3 style={{ margin: '0 0 9px' }}>
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
                            Predictive machine learning models help estimate
                            expected agricultural yield.
                        </p>
                    </div>


                    {/* Weather */}
                    <div style={cardStyle}>
                        <div style={iconStyle}>
                            <CloudSun size={24} />
                        </div>

                        <h3 style={{ margin: '0 0 9px' }}>
                            Weather Intelligence
                        </h3>

                        <p
                            style={{
                                color: 'var(--text-muted, #64748b)',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                margin: 0
                            }}
                        >
                            Location-based weather information can be used to
                            understand current environmental conditions.
                        </p>
                    </div>


                    {/* Disease */}
                    <div style={cardStyle}>
                        <div style={iconStyle}>
                            <ShieldCheck size={24} />
                        </div>

                        <h3 style={{ margin: '0 0 9px' }}>
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
                            Image-based AI classification helps identify potential
                            plant diseases from uploaded images.
                        </p>
                    </div>


                    {/* Cattle */}
                    <div style={cardStyle}>
                        <div style={iconStyle}>
                            <Beef size={24} />
                        </div>

                        <h3 style={{ margin: '0 0 9px' }}>
                            Cattle Classification
                        </h3>

                        <p
                            style={{
                                color: 'var(--text-muted, #64748b)',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                margin: 0
                            }}
                        >
                            AI-based image classification for identifying different
                            cattle breeds.
                        </p>
                    </div>


                    {/* AI */}
                    <div style={cardStyle}>
                        <div style={iconStyle}>
                            <Cpu size={24} />
                        </div>

                        <h3 style={{ margin: '0 0 9px' }}>
                            AI-Driven Platform
                        </h3>

                        <p
                            style={{
                                color: 'var(--text-muted, #64748b)',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                margin: 0
                            }}
                        >
                            Different machine learning and AI components work
                            together through a unified web application.
                        </p>
                    </div>

                </div>

            </section>


            {/* TECHNOLOGY */}
            <section style={{ padding: '55px 10px' }}>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '25px',
                        alignItems: 'stretch'
                    }}
                >

                    <div style={cardStyle}>
                        <div style={iconStyle}>
                            <Brain size={24} />
                        </div>

                        <h2
                            style={{
                                fontSize: '1.5rem',
                                marginBottom: '12px'
                            }}
                        >
                            Built with AI & Machine Learning
                        </h2>

                        <p
                            style={{
                                color: 'var(--text-muted, #64748b)',
                                lineHeight: '1.7',
                                margin: 0
                            }}
                        >
                            The platform uses machine learning models for agricultural
                            prediction and computer vision models for image-based
                            classification tasks.
                        </p>
                    </div>


                    <div style={cardStyle}>
                        <div style={iconStyle}>
                            <Users size={24} />
                        </div>

                        <h2
                            style={{
                                fontSize: '1.5rem',
                                marginBottom: '12px'
                            }}
                        >
                            Designed Around the User
                        </h2>

                        <p
                            style={{
                                color: 'var(--text-muted, #64748b)',
                                lineHeight: '1.7',
                                margin: 0
                            }}
                        >
                            We focus on keeping the interface simple so that users
                            can provide relevant information and receive useful
                            insights without navigating multiple disconnected systems.
                        </p>
                    </div>

                </div>

            </section>

            {/* PROJECT OVERVIEW */}

            <section
                style={{
                    margin: '20px 10px 45px',
                    padding: '35px 25px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(5, 150, 105, 0.06)',
                    border: '1px solid rgba(5, 150, 105, 0.15)',
                    textAlign: 'center'
                }}
            >
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px' }}>
                    Built for Smarter Farming
                </h2>

                <p
                    style={{
                        color: 'var(--text-muted, #64748b)',
                        maxWidth: '650px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}
                >
                    AI Farming Assistant combines machine learning, weather data,
                    and intelligent agricultural tools to help farmers make
                    data-driven decisions.
                </p>
            </section>


        </div>
    );
}

