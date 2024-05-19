import React from 'react'

const ButtonChatUs = () => {
  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#f0f7f2',
      borderRadius: '20px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      transition: 'background-color 0.3s ease',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e0e7e2')}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f0f7f2')}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: '10px' }}
    >
      <circle cx="12" cy="12" r="12" fill="#4CAF50" />
      <circle cx="8" cy="12" r="1.5" fill="white" />
      <circle cx="12" cy="12" r="1.5" fill="white" />
      <circle cx="16" cy="12" r="1.5" fill="white" />
    </svg>
    <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#333' }}>
      Chat Us
    </span>
  </div>
  
  )
}

export default ButtonChatUs