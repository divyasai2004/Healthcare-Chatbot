import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SymptomAnalysis = () => {
  const [symptoms, setSymptoms] = useState("");
  const [analysis, setAnalysis] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    setAnalysis(`You entered: ${symptoms}`);
  };

  return (
    <div>
      <h2>Symptom Analysis</h2>
      <textarea
        placeholder="Enter symptoms..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />
      <button onClick={handleAnalyze}>Analyze</button>
      {analysis && <p>{analysis}</p>}
      <br />
      <a href="/" style={{ textDecoration: "none", color: "blue" }}>Go to Homepage</a>
    </div>
  );
};

export default SymptomAnalysis;
