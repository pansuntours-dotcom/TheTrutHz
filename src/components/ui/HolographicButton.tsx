import React from 'react';

const HolographicButton = ({ label = 'Click Me', onClick }: { label?: string; onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'linear-gradient(90deg, #00f0ff, #ff00e0)',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 24px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: '0.3s',
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
      onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {label}
    </button>
  );
};

export default HolographicButton;
