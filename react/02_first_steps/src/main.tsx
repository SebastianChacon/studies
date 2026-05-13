import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MyAwesomeName } from "./MyAwesomeName.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Hi world!!</h1>
    <MyAwesomeName firstName="mateo" lastName="Chacon" />
  </StrictMode>,
);
