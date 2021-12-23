import "./assets/css/style.css"
import { Router } from "@reach/router";
import Homepage from "./routes/Homepage.js"
import BlogsPage from "./routes/BlogsPage.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <BlogsPage path="/blogs" />
        <Homepage path="*" />
      </Router>
    </div>
  );
}

export default App;
