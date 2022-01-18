import "./assets/css/style.css"
import { Router } from "@reach/router";
import Homepage from "./routes/Homepage.js"
import BlogsPage from "./routes/BlogsPage.js"
import NotFoundPage  from "./routes/NotFoundPage";
import PrivacyPage from "./routes/PrivacyPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <BlogsPage path="/blogs" />
        <NotFoundPage path="*" />
        <PrivacyPage path="/privacypolicy" />
      </Router>
    </div>
  );
}

export default App;
