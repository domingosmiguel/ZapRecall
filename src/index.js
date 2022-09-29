// OLD WAY
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.querySelector("#root"));

// NEW WAY WAY NODE.JS 18+
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.querySelector("#root")).render(<App />);

// step-by-step ----->

// const container = document.querySelector("#root");
// const root = createRoot(container);

// root.render(<App />);
