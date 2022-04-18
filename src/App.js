import './App.css';

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchCandidates from './pages/searchCandidates';
import AddCandidates from './pages/addCandidates';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path="/" exact element={<SearchCandidates />} />
        <Route path="/add" exact element={<AddCandidates />} />
      </Routes>
    </Router>
  );
}

export default App;
