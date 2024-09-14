import { createContext, useState } from "react";
import run from "../config/Config"; // Changed to reflect the new config

export const Context = createContext();

const ContextProvider = (props) => {
  const [query, setQuery] = useState(""); // Changed variable names to fit the "Ask Me" context
  const [response, setResponse] = useState(""); // This will store the API response
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const delayResponse = (index, nextWord) => {
    setTimeout(() => {
      setResponse((prev) => prev + nextWord);
    }, 80 * index);
  };

  const newQuery = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResponse("");
    setLoading(true);
    setShowResult(true);

    let apiResponse;
    if (prompt) {
      apiResponse = await run(prompt); // Fetching response from the API
      setQuery(prompt);
    } else {
      setQuery(query);
      apiResponse = await run(query);
    }

    let responseArray = apiResponse.split(" ");
    for (let i = 0; i < responseArray.length; i++) {
      const nextWord = responseArray[i];
      delayResponse(i, nextWord + " ");
    }

    setLoading(false);
    setQuery(""); // Clear the query input after processing
  };

  const contextValue = {
    query,
    setQuery,
    onSent,
    response,
    showResult,
    loading,
    newQuery,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
