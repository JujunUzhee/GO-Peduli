import React, { useEffect } from 'react';
import profileImage from '/image/about.png'; 
import InputChat from './element/input/inputChat';
import ButtonKirimChat from './element/button/buttonKirimChat';

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
        <InputChat />
        <ButtonKirimChat />
      </div>
    </div>
  );
};

export default ChatBox;
