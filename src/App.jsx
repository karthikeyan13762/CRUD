import React from "react";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";





function App() {
  return (
    <div className="main">
      <p className="position-sticky">
        <span>
          <a href="/create" className="btn btn-primary me-3">
            HOME
          </a>
        </span>
        <span>
          <a href="/read" className="btn btn-primary">
            Update/Delete
          </a>
        </span>
      </p>
      <h1 className="mt-2 CrudContent">Crud Operation</h1>

      <Router>
        <Routes>
          <Route path="/create" element={<Create />} />

          <Route id="/read"  path="/read" element={<Read />} />

          <Route  path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
