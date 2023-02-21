import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// views
import Home from "./views/Home";
import About from "./views/About";
import Foods from "./views/Foods";
import FilteredFoods from "./views/FilteredFoods";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// styles
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/About" />
        <Route component={Foods} path="/Foods" />
        <Route component={FilteredFoods} path="/FilteredFoods/:slug" />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
