
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import React from 'react';
import { DarkModeProvider } from "./context/context.jsx";
import MainComponent from "./components/maincomponent.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
     
      <MainComponent />
    </DarkModeProvider>
  </StrictMode>
);


