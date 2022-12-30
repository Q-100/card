import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstPage from "./pages/FirstPage";
import SmartCardPage from "./pages/productPage/SmartCardPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<SmartCardPage />}
          ></Route>
          <Route path="/card" element={<SmartCardPage />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
