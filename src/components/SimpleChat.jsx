import React, { useState, useRef, useEffect } from "react";
import "./SimpleChat.css";

export default function SimpleChat({ apiUrl = "http://localhost:4000/chat", selectedText = "" }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages or open state changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  // Update input when selectedText changes (optional)
  useEffect(() => {
    // We don't want to overwrite the input, just keep it empty initially
  }, [selectedText]);

  const sendMessage = async () => {
    if (!input.trim() && !selectedText) return;

    // Add user message
    const userMessage = { sender: "You", text: input || "Using selected text" };
    setMessages((prev) => [...prev, userMessage]);

    // Combine selected text + typed prompt
    const combinedMessage = selectedText
      ? `${input}\n\nText to work on:\n${selectedText}`
      : input;

    // Clear input field
    setInput("");

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: combinedMessage }),
      });
      const data = await res.json();
      const botMessage = { sender: "Bot", text: data.reply || "No response" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "Bot", text: "Error connecting to server" }]);
    }
  };

  return (
    <div className="chat-container">
      {/* Toggle Button */}
      <button className="chat-toggle-btn" onClick={() => setOpen(!open)}>
        {open ? "Close Chat" : "Chat with AI"}
      </button>

      {open && (
        <div className="chat-box">
          {/* Chat Header */}
          <div className="chat-header">
            <span>AI Chat</span>
            <button className="chat-close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          {/* Selected Text Field */}
          {selectedText && (
            <div className="chat-selected-text">
              <strong>Selected Text:</strong>
              <div>{selectedText}</div>
            </div>
          )}

          {/* Chat Messages */}
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender === "You" ? "user" : "bot"}`}>
                <strong>{msg.sender}: </strong> {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
