import * as ReactDOM from "react-dom/client";
import { Provider } from "./Provider";

function render() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Provider />);
}

render();
