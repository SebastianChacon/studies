import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SearchGithub } from "./SearchGithub";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchGithub />
  </StrictMode>,
);
