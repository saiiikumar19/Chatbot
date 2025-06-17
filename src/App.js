import React, { useEffect } from "react";
import "./App.css"; // We'll style in App.css

function App() {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "1e1a4142-872f-4712-8256-2d1ab5b9e01d",
      region: "eu-de",
      serviceInstanceID: "5b8231fe-1139-4ef9-8b41-481151c85904",
      onLoad: async (instance) => { await instance.render(); }
    };

    setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || 'latest') +
        "/WatsonAssistantChatEntry.js";
      document.head.appendChild(script);
    });
  }, []);

  return (
    <div className="container">
      <h1>🧠 Citizen AI Chatbot</h1>
      <p>Welcome! Ask your <span className="highlight">citizen service questions</span> anytime using the chatbot below.</p>
    </div>
  );
}

export default App;
