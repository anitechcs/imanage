import * as ReactDOM from "react-dom/client";
import Layout from "./components/Layout";

function render() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Layout />);
}

render();
