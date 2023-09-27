import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.tsx"; // redux template
import { Provider } from "react-redux"; // redux template

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* redux template */}
      <App />
    </Provider>
    {/* redux template */}
  </React.StrictMode>
);
