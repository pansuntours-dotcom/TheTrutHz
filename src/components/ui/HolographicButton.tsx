import React from 'react';

export default function HolographicButton({ children }: { children?: React.ReactNode }) {
  return (
    <button style={{
      background: 'linear-gradient(135deg, #ff00ff, #00ffff)',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold'
    }}>
      {children || 'Click Me'}
    </button>
  );
}
