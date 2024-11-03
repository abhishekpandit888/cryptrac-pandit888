import React from "react";
import { useState } from "react";
import "./Ask.css";
import axios from "axios";

function Ask() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("Loading...");

    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC69FsKKgeeoq80yiGupkaUPQyz1T3TeJc",
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: `${question} give me a short answer in 50 words` }],
          },
        ],
      },
    });

    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }

  return (
    <div className="ask-section">
      <div className="ask-container">
        <h1 className="ask-title">Ask Me</h1>
        <p className="ask-description">
          Got questions? The 'Ask Me' section is here for you! Feel free to
          raise any doubts or inquiries. We're here to help you find the best
          answers.
        </p>
        <div className="ask-answer">{answer}</div>
        <textarea
          className="ask-question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question here..."
          cols="30"
          rows="5"
        ></textarea>
        <button className="ask-button" onClick={generateAnswer}>
          Generate Answer
        </button>
      </div>
    </div>
  );
}

export default Ask;
