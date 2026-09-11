import { Survey } from "survey-react-ui";
import "survey-core/survey-core.css";
import { createSurvey } from "./survey";
import "./App.css";
import { useState } from "react";

function App() {
  const [survey] = useState(() => createSurvey());

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
      <Survey model={survey} />
    </div>
  );
}

export default App;
