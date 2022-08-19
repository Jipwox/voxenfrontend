import HomePage from "./home/HomePage";
import SaucePage from "./sauce/SaucePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/sauce" element={<SaucePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
