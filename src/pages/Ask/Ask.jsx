import React, { useContext } from "react";
import "./Ask.css";
import { Context } from "../../context/AskContext"; // Importing the context

// const { query, setQuery, onSent, response, showResult, loading, newQuery } =
// useContext(Context);

// const handleSubmit = (e) => {
// e.preventDefault();
// onSent(query);
// };

const ask = () => {
  return (
    <div className="ask-me-container">
      <h1 className="ask-me-heading">Ask Me</h1>

      {/* {!showResult && (
        <div className="ask-me-input-section">
          <img src="/path-to-image.png" alt="Crypto" className="ask-me-image" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your crypto query..."
              className="ask-me-input"
            />
            <button type="submit" className="ask-me-submit-button">
              Enter
            </button>
          </form>
        </div>
      )}

      {showResult && (
        <div className="ask-me-result-section">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="ask-me-response">
              <p dangerouslySetInnerHTML={{ __html: response }} />
            </div>
          )}
          <button onClick={newQuery} className="ask-me-new-query-button">
            Ask Another Question
          </button>
        </div>
      )} */}
    </div>
  );
};

export default ask;
