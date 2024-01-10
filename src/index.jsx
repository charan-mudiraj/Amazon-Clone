import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./App.css";
import { inject } from "@vercel/analytics";

inject();

ReactDom.createRoot(document.getElementById("root")).render(<App />);
