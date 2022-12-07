import * as React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./components/App.css";

const container = document.querySelector("#root");
const root = createRoot(container!);
root.render(<App />);
