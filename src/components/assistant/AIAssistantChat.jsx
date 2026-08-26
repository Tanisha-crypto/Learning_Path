import React, { useState, useEffect, useRef } from 'react';
import { getAIMentorResponse } from '../../services/aiMentorService';
import { SUGGESTED_QUESTIONS } from '../../data/aiResponses';
import { Bot, Send, X, Sparkles, User, RefreshCw, HelpCircle, Flame } from 'lucide-react';

export default function AIAssistantChat({ isOpen, onClose, roadmap }) {
  const [messages, setMessages] = useState([
    {
      id: 'init-1',
      sender: 'assistant',
      text: `Hello! I am your **LearnPath AI Mentor** 🤖\n\nI am actively tracking your curriculum, completed milestones, and pacing. How can I help you today?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend) => {
    const messageContent = (textToSend || inputText).trim();
    if (!messageContent) return;

    // Add user message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: messageContent,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const aiResult = await getAIMentorResponse(messageContent, roadmap, messages);
      const assistantMsg = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: aiResult.text,
        followUps: aiResult.suggestedFollowUps || [],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          sender: 'assistant',
          text: 'I encountered a brief latency hiccup. Please ask again or try one of the quick suggestions below!',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="assistant-overlay-backdrop" onClick={onClose}>
      <div className="assistant-drawer-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="assistant-header">
          <div className="assistant-profile-badge">
            <div className="assistant-avatar-box">
              <Bot size={22} />
            </div>
            <div className="assistant-info-text">
              <div className="assistant-name">
                <span>LearnPath AI Mentor</span>
                <Sparkles size={14} color="#38bdf8" />
              </div>
              <div className="assistant-status">
                <span className="assistant-live-indicator" />
                <span>Context Aware • Online</span>
              </div>
            </div>
          </div>

          <button className="btn-close-assistant" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Messages List */}
        <div className="assistant-messages-list">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-message-bubble ${msg.sender}`}>
              <span className="message-author-tag">
                {msg.sender === 'assistant' ? 'AI Mentor' : 'You'} • {msg.time}
              </span>
              <div className="message-content-box">
                {msg.text}
              </div>

              {/* Follow-up suggestions if available */}
              {msg.followUps && msg.followUps.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.35rem' }}>
                  {msg.followUps.map((fUp, idx) => (
                    <button
                      key={idx}
                      className="prompt-pill-btn"
                      onClick={() => handleSendMessage(fUp)}
                    >
                      {fUp}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="chat-message-bubble assistant">
              <span className="message-author-tag">AI Mentor is analyzing...</span>
              <div className="message-content-box" style={{ width: 'fit-content' }}>
                <div className="typing-dots">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompt Pills */}
        <div className="suggested-prompts-container">
          <span className="prompts-label">Suggested Questions:</span>
          <div className="prompts-scroll-row">
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                type="button"
                className="prompt-pill-btn"
                onClick={() => handleSendMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <form 
          className="assistant-input-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <input
            type="text"
            className="chat-input-text"
            placeholder="Ask about your roadmap, concepts, projects..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isTyping}
          />
          <button 
            type="submit" 
            className="btn-send-message"
            disabled={!inputText.trim() || isTyping}
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
