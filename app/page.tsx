'use client';

import React, { useState } from 'react';

export default function EyeSpecialistTool() {
  const [selectedCondition, setSelectedCondition] = useState('');

  const conditions = [
    'Red Eye',
    'Flashes & Floaters', 
    'Papilloedema',
    'Wet AMD',
    'Cataracts',
    'Glaucoma',
    'Diplopia'
  ];

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '24px', 
      backgroundColor: '#FAFAFA', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{ 
        marginBottom: '32px', 
        backgroundColor: 'white', 
        padding: '24px', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(10, 61, 98, 0.1)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '32px', marginRight: '12px' }}>👁️</span>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            color: '#0A3D62', 
            margin: '0'
          }}>
            EyeSpecialist.ai
          </h1>
        </div>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '8px', 
          color: '#1C1C1C',
          margin: '0 0 8px 0'
        }}>
          Clinical decision support for eye conditions
        </h2>
        <p style={{ 
          fontSize: '18px', 
          color: '#1C1C1C',
          margin: '0 0 16px 0'
        }}>
          See smarter. Refer safer.
        </p>
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#FFC300', 
          color: '#1C1C1C', 
          borderRadius: '8px',
          borderLeft: '4px solid #E6B800'
        }}>
          <p style={{ fontSize: '14px', fontWeight: '500', margin: '0' }}>
            This isn't a diagnosis — it's a guide. Always use your clinical judgment.
          </p>
        </div>
      </div>

      {/* Main Content */}
      {!selectedCondition ? (
        <div>
          <h3 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            marginBottom: '24px', 
            color: '#1C1C1C' 
          }}>
            What case are we working through today?
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '20px' 
          }}>
            {conditions.map((condition) => (
              <div
                key={condition}
                onClick={() => setSelectedCondition(condition)}
                style={{
                  padding: '24px',
                  backgroundColor: 'white',
                  border: '2px solid #0A3D62',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00B894';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 61, 98, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#0A3D62';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px', color: '#0A3D62' }}>👁️</span>
                  <h3 style={{ 
                    fontWeight: '600', 
                    fontSize: '18px',
                    color: '#1C1C1C', 
                    margin: '0'
                  }}>
                    {condition}
                  </h3>
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#666', 
                  lineHeight: '1.5',
                  margin: '0' 
                }}>
                  Clinical decision pathways available with emergency protocols.
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              color: '#1C1C1C',
              margin: '0'
            }}>
              Clinical assessment: {selectedCondition}
            </h2>
            <button
              onClick={() => setSelectedCondition('')}
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: '500',
                color: '#0A3D62',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: '6px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(10, 61, 98, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ← Back to pathways
            </button>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '32px', 
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(10, 61, 98, 0.1)',
            textAlign: 'center' 
          }}>
            <h3 style={{ 
              color: '#1C1C1C', 
              margin: '0 0 16px 0',
              fontSize: '20px',
              fontWeight: '600'
            }}>
              {condition} Assessment Tool
            </h3>
            <p style={{ 
              color: '#666', 
              margin: '0 0 20px 0',
              lineHeight: '1.6'
            }}>
              The complete clinical decision engine will be loaded here with branch-based logic, 
              emergency protocols, and evidence-based referral pathways.
            </p>
            <div style={{
              padding: '16px',
              backgroundColor: '#EFF6FF',
              border: '1px solid #93C5FD',
              borderRadius: '8px',
              color: '#1E3A8A'
            }}>
              <p style={{ margin: '0', fontSize: '14px' }}>
                ✅ Repository successfully deployed<br/>
                🔄 Ready for full clinical tool integration
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
