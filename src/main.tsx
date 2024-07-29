import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function mountApp() {
  if (import.meta.env.MODE === "development") {
    const { worker } = await import("./mock/browser.ts");
    await worker.start();
  }

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

mountApp();
