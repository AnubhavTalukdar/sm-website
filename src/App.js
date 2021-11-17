import "./assets/css/style.css"
import { Router } from "@reach/router";
import Homepage from "./routes/Homepage.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <Homepage path="*" />
      </Router>
    </div>
  );
}

export default App;
