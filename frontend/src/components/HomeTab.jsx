import React from 'react';
import { Target, ArrowRight } from 'lucide-react';

export default function HomeTab({ content, setActiveTab }) {
  return (
    <div className="animate-fade" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 0' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(5, 150, 105, 0.08)', color: 'var(--primary)', fontSize: '11px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '99px', border: '1px solid rgba(5, 150, 105, 0.15)', marginBottom: '1.5rem' }}>
        <Target size={12} />
        <span>Sovereign Indian Language AI Models Connected</span>
      </div>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.15 }}>
        {content?.heroHeading}
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6 }}>
        {content?.heroSubheading}
      </p>
      <button 
        onClick={() => setActiveTab('form')} 
        style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none', fontWeight: 'bold', padding: '12px 24px', borderRadius: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}
      >
        <span>{content?.ctaButton}</span> <ArrowRight size={16} />
      </button>
    </div>
  );
}