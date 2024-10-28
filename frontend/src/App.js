import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import RequestLeave from "./pages/RequestLeave";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/request"
          element={
            <Layout>
              <RequestLeave />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
