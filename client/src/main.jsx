import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
);
