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
  stomachache: "Possible causes: Indigestion, Food Poisoning, Gastritis, Appendicitis, IBS, Ulcers, Constipation, Gallstones.",
  sore_throat: "Possible causes: Common Cold, Strep Throat, Allergies, Acid Reflux.",
  shortness_of_breath: "Possible causes: Asthma, Anxiety, Pneumonia, Heart Disease.",
  chest_pain: "Possible causes: Heart Attack, Acid Reflux, Muscle Strain, Panic Attack.",
  diarrhea: "Possible causes: Food Poisoning, IBS, Lactose Intolerance, Viral Infection.",
  constipation: "Possible causes: Low Fiber Diet, Dehydration, IBS, Hypothyroidism.",
  abdominal_pain: "Possible causes: Indigestion, Appendicitis, Ulcers, Gallstones.",
  back_pain: "Possible causes: Muscle Strain, Herniated Disc, Poor Posture, Kidney Stones.",
  joint_pain: "Possible causes: Arthritis, Gout, Lyme Disease, Autoimmune Disorders.",
  skin_rash: "Possible causes: Allergic Reaction, Eczema, Psoriasis, Fungal Infection.",
  itchy_skin: "Possible causes: Dry Skin, Allergies, Eczema, Liver Disease.",
  hair_loss: "Possible causes: Stress, Thyroid Disorders, Nutrient Deficiency, Alopecia.",
  night_sweats: "Possible causes: Menopause, Infections, Hyperthyroidism, Cancer.",
  frequent_urination: "Possible causes: Diabetes, Urinary Tract Infection, Pregnancy, Kidney Disease.",
  burning_urination: "Possible causes: UTI, STDs, Kidney Stones, Dehydration.",
  swollen_lymph_nodes: "Possible causes: Infection, Autoimmune Disease, Cancer, Mononucleosis.",
  tingling_numbness: "Possible causes: Nerve Damage, Diabetes, Vitamin Deficiency, Stroke.",
  blurred_vision: "Possible causes: Refractive Errors, Diabetes, Cataracts, Glaucoma.",
  hearing_loss: "Possible causes: Aging, Ear Infection, Noise Exposure, Earwax Buildup.",
  palpitations: "Possible causes: Anxiety, Caffeine, Heart Arrhythmia, Hyperthyroidism.",
  swelling_legs: "Possible causes: Heart Failure, Kidney Disease, Lymphedema, Blood Clots.",
  cold_hands_feet: "Possible causes: Poor Circulation, Raynaud’s Disease, Anemia, Diabetes.",
  unexplained_weight_loss: "Possible causes: Hyperthyroidism, Cancer, Diabetes, Malabsorption Disorders.",
  sudden_weight_gain: "Possible causes: Hypothyroidism, Water Retention, PCOS, Medication Side Effects.",
  memory_loss: "Possible causes: Aging, Alzheimer’s Disease, Vitamin B12 Deficiency, Head Injury.",
  mood_swings: "Possible causes: Hormonal Imbalance, Stress, Depression, Bipolar Disorder.",
};

const SymptomAnalysis = () => {
  const [symptoms, setSymptoms] = useState("");
  const [analysis, setAnalysis] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    const symptomList = symptoms.toLowerCase().split(/\s*,\s*/);
    let results = [];

    symptomList.forEach((symptom) => {
      let formattedSymptom = symptom.replace(/\s+/g, "_"); // Convert spaces to underscores
      if (symptomMapping[formattedSymptom]) {
        results.push(`${symptom}: ${symptomMapping[formattedSymptom]}`);
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

// const symptomMapping = {
//   headache: "Possible causes: Migraine, Stress, Dehydration, Sinus Infection.",
//   fever: "Possible causes: Flu, COVID-19, Infection, Heatstroke.",
//   cough: "Possible causes: Common Cold, Asthma, Bronchitis, COVID-19.",
//   fatigue: "Possible causes: Lack of sleep, Anemia, Thyroid Issues, Depression.",
//   dizziness: "Possible causes: Low Blood Pressure, Dehydration, Inner Ear Problems, Anemia.",
//   nausea: "Possible causes: Food Poisoning, Pregnancy, Motion Sickness, Migraine.",
//   vomiting: "Possible causes: Food Poisoning, Stomach Flu, Motion Sickness, Migraine.",
//   stomachache: "Possible causes: Indigestion, Food Poisoning, Gastritis, Appendicitis, IBS, Ulcers, Constipation, Gallstones."
// };

// const SymptomAnalysis = () => {
//   const [symptoms, setSymptoms] = useState("");
//   const [analysis, setAnalysis] = useState("");
//   const navigate = useNavigate();

//   const handleAnalyze = () => {
//     const symptomList = symptoms.toLowerCase().split(/\s*,\s*/);
//     let results = [];

//     symptomList.forEach((symptom) => {
//       if (symptomMapping[symptom]) {
//         results.push(`${symptom}: ${symptomMapping[symptom]}`);
//       } else {
//         results.push(`${symptom}: No specific information found.`);
//       }
//     });

//     setAnalysis(results.join("\n"));
//   };

//   return (
//     <div style={{ color: "white", backgroundColor: "black", padding: "20px" }}>
//       <h2>Symptom Analysis</h2>
//       <textarea
//         placeholder="Enter symptoms (comma-separated)..."
//         value={symptoms}
//         onChange={(e) => setSymptoms(e.target.value)}
//         style={{ width: "300px", height: "80px" }}
//       />
//       <br />
//       <button onClick={handleAnalyze} style={{ marginTop: "10px" }}>
//         Analyze
//       </button>
//       {analysis && (
//         <pre style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>{analysis}</pre>
//       )}
//       <br />
//       <a href="/" style={{ textDecoration: "none", color: "blue" }}>
//         Go to Homepage
//       </a>
//     </div>
//   );
// };

// export default SymptomAnalysis;

