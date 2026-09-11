import { useState } from "react";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.css";
import { createSurvey } from "./survey";
import "./App.css";

function LandingPage({ onStartSurvey }: { onStartSurvey: () => void }) {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 20px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "24px", color: "#1a1a1a" }}>
          Your Feedback Matters
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "16px", lineHeight: "1.6" }}>
          Help us improve our platform by sharing your experience. Your insights are valuable and help shape the future of our product.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#888", marginBottom: "40px" }}>
          ⏱️ Approximately 5 minutes to complete
        </p>

        <button
          onClick={onStartSurvey}
          style={{
            padding: "14px 40px",
            fontSize: "1.05rem",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "background-color 0.3s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "#1d4ed8";
            (e.target as HTMLButtonElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "#2563eb";
            (e.target as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          Let's get started ... 
        </button>

        <div style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid #e5e5e5" }}>
          <h3 style={{ marginBottom: "20px", color: "#1a1a1a" }}>What you'll be asked about</h3>
          <ul style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            textAlign: "left",
          }}>
            <li style={{ color: "#555" }}>✓ Your role and usage patterns</li>
            <li style={{ color: "#555" }}>✓ Overall satisfaction with platform</li>
            <li style={{ color: "#555" }}>✓ Areas for improvement</li>
            <li style={{ color: "#555" }}>✓ Feature requests and feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  const showLanding = import.meta.env.VITE_SHOW_LANDING !== "false";
  const [showSurvey, setShowSurvey] = useState(!showLanding);
  const [survey] = useState(() => createSurvey());

  if (!showSurvey) {
    return <LandingPage onStartSurvey={() => setShowSurvey(true)} />;
  }

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
      <div style={{ marginBottom: "24px" }}>
        <button
          onClick={() => setShowSurvey(false)}
          style={{
            padding: "10px 16px",
            fontSize: "0.9rem",
            backgroundColor: "transparent",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            cursor: "pointer",
            color: "#666",
            fontFamily: "inherit",
            transition: "background-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "#f9fafb";
            (e.target as HTMLButtonElement).style.color = "#374151";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
            (e.target as HTMLButtonElement).style.color = "#666";
          }}
        >
          ← Back to Home
        </button>
      </div>
      <Survey model={survey} />
    </div>
  );
}

export default App;
