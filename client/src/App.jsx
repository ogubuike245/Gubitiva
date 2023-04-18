import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// FILE IMPORTS
import Layout from "./components/Layout";
import { HomePage, About } from "./pages";

// CSS
import "./assets/css";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
