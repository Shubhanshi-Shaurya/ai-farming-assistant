import React, { useState, useRef, useEffect } from 'react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '🤖 Hello! I am your AI Farming assistant. Ask me anything about plant diseases, crop care, or herd health!'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userText,
          session_id: 'user_session_1' 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: `⚠️ Error: ${data.error || 'Unable to get response'}` }
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: '⚠️ Connection error. Make sure your backend server is running.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Chat Window */}
      {isOpen && (
        <div style={styles.chatWindow}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerTitle}>
              <span>🤖</span>
              <span>AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>✕</button>
          </div>

          {/* Messages Area */}
          <div style={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={msg.sender === 'user' ? styles.userRow : styles.botRow}
              >
                <div style={msg.sender === 'user' ? styles.userBubble : styles.botBubble}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={styles.botRow}>
                <div style={styles.loadingBubble}>Thinking... 💭</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div style={styles.inputArea}>
            <input
              type="text"
              placeholder="Ask your query..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={styles.inputField}
            />
            <button onClick={handleSend} disabled={loading} style={styles.sendBtn}>
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} style={styles.floatingBtn}>
        {isOpen ? '✕' : '🤖'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 9999,
    fontFamily: 'Arial, sans-serif'
  },
  floatingBtn: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#2E7D32',
    color: '#fff',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s',
  },
  chatWindow: {
    width: '340px',
    height: '450px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '12px',
    overflow: 'hidden',
    border: '1px solid #e0e0e0'
  },
  header: {
    backgroundColor: '#2E7D32',
    color: '#ffffff',
    padding: '12px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '15px'
  },
  headerTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer'
  },
  messagesContainer: {
    flex: 1,
    padding: '12px',
    overflowY: 'auto',
    backgroundColor: '#F9FBF9',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  userRow: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  botRow: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  userBubble: {
    backgroundColor: '#2E7D32',
    color: '#ffffff',
    padding: '8px 12px',
    borderRadius: '14px 14px 2px 14px',
    maxWidth: '80%',
    fontSize: '13px',
    lineHeight: '1.4',
    wordBreak: 'break-word'
  },
  botBubble: {
    backgroundColor: '#E8F5E9',
    color: '#1B5E20',
    padding: '8px 12px',
    borderRadius: '14px 14px 14px 2px',
    maxWidth: '80%',
    fontSize: '13px',
    lineHeight: '1.4',
    border: '1px solid #C8E6C9',
    wordBreak: 'break-word'
  },
  loadingBubble: {
    backgroundColor: '#F1F1F1',
    color: '#777',
    padding: '6px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontStyle: 'italic'
  },
  inputArea: {
    display: 'flex',
    padding: '8px',
    borderTop: '1px solid #e0e0e0',
    backgroundColor: '#ffffff'
  },
  inputField: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #cccccc',
    borderRadius: '20px',
    fontSize: '13px',
    outline: 'none'
  },
  sendBtn: {
    backgroundColor: '#2E7D32',
    color: '#ffffff',
    border: 'none',
    borderRadius: '50%',
    width: '34px',
    height: '34px',
    marginLeft: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px'
  }
};

export default ChatbotWidget;