import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const res = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div className='App'>
      <h2>Apa yang bisa saya bantu?</h2>
      <div className='chatbox'>
        <input 
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Tulis Pertanyaan Anda...'
        />
      </div>
      <button onClick={sendMessage}>Kirim</button>
      {response && <p>Chatbot: {response}</p>}
    </div>
  );
}

export default App;
