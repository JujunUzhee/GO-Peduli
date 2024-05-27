import React, { useEffect } from 'react';
import profileImage from '/image/about.png'; 

const ChatBox = ({ onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.chat-box') && !event.target.closest('.chat-button')) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="chat-box fixed bottom-16 right-5 w-80 bg-white rounded-lg shadow-lg z-30">
      <div className="flex items-center p-4 bg-Green rounded-t-lg">
        <img src={profileImage} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="text-white font-bold">Jial Ahmad</h3>
          <p className="text-white text-sm">Customer Service</p>
        </div>
      </div>
      <div className="p-4 bg-gray-100 h-64">
      <div className="chat chat-end">
  <div className="chat-bubble text-sm bg-Green text-white">Gimana Cara berdonasi ?</div>
</div>
      <div className="chat chat-start">
  <div className="chat-bubble text-sm bg-Green text-white">Bisa Klik Button Donasi Sekarang🤝</div>
</div>


      </div>
      <div className="flex items-center p-2 bg-white rounded-b-lg border-t">
        <input
          type="text"
          placeholder="Type your message"
          className="w-full px-4 py-2 text-gray-700 rounded-full focus:outline-none"
        />
        <button className="ml-2 bg-Green text-white p-2 rounded-full hover:bg-green-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
