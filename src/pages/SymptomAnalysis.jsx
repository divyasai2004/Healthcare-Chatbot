import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const symptomMapping = {
  headache: "Possible causes: Migraine, Stress, Dehydration, Sinus Infection.",
  fever: "Possible causes: Flu, COVID-19, Infection, Heatstroke.",
  cough: "Possible causes: Common Cold, Asthma, Bronchitis, COVID-19.",
  fatigue: "Possible causes: Lack of sleep, Anemia, Thyroid Issues, Depression.",
  dizziness: "Possible causes: Low Blood Pressure, Dehydration, Inner Ear Problems, Anemia.",
  nausea: "Possible causes: Food Poisoning, Pregnancy, Motion Sickness, Migraine.",
  vomiting: "Possible causes: Food Poisoning, Stomach Flu, Motion Sickness, Migraine.",
  stomachache: "Possible causes: Indigestion, Food Poisoning, Gastritis, Appendicitis, IBS, Ulcers, Constipation, Gallstones."
};

const SymptomAnalysis = () => {
  const [symptoms, setSymptoms] = useState("");
  const [analysis, setAnalysis] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    const symptomList = symptoms.toLowerCase().split(/\s*,\s*/);
    let results = [];

    symptomList.forEach((symptom) => {
      if (symptomMapping[symptom]) {
        results.push(`${symptom}: ${symptomMapping[symptom]}`);
      } else {
        results.push(`${symptom}: No specific information found.`);
      }
    });

    setAnalysis(results.join("\n"));
  };

  return (
    <div style={{ color: "white", backgroundColor: "black", padding: "20px" }}>
      <h2>Symptom Analysis</h2>
      <textarea
        placeholder="Enter symptoms (comma-separated)..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        style={{ width: "300px", height: "80px" }}
      />
      <br />
      <button onClick={handleAnalyze} style={{ marginTop: "10px" }}>
        Analyze
      </button>
      {analysis && (
        <pre style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>{analysis}</pre>
      )}
      <br />
      <a href="/" style={{ textDecoration: "none", color: "blue" }}>
        Go to Homepage
      </a>
    </div>
  );
};

export default SymptomAnalysis;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SymptomAnalysis = () => {
//   const [symptoms, setSymptoms] = useState("");
//   const [analysis, setAnalysis] = useState("");
//   const navigate = useNavigate();

//   const handleAnalyze = () => {
//     setAnalysis(`You entered: ${symptoms}`);
//   };

//   return (
//     <div>
//       <h2>Symptom Analysis</h2>
//       <textarea
//         placeholder="Enter symptoms..."
//         value={symptoms}
//         onChange={(e) => setSymptoms(e.target.value)}
//       />
//       <button onClick={handleAnalyze}>Analyze</button>
//       {analysis && <p>{analysis}</p>}
//       <br />
//       <a href="/" style={{ textDecoration: "none", color: "blue" }}>Go to Homepage</a>
//     </div>
//   );
// };

// export default SymptomAnalysis;
