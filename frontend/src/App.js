import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <AnimatedRoutes />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
