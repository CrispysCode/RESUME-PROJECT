import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import WorkHistory from "./components/WorkHistory.jsx";
import Resume from "./components/Resume.jsx";

createRoot(document.getElementById("left")).render(
  <StrictMode>
    <General />
    <Education />
    <WorkHistory />
  </StrictMode>
);

createRoot(document.getElementById("right")).render(
  <StrictMode>
    <Resume />
  </StrictMode>
);
