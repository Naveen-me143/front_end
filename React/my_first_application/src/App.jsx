import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DeleteProduct from "./components/DeleteProduct"; // Use this instead of FetchProducts
import FetchUsers from "./components/FetchUsers";
import SearchInput from "./components/SearchInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<h2 className="text-center mt-5">Welcome to Home Page</h2>}
        />
        <Route path="/products" element={<DeleteProduct />} />
        <Route path="/users" element={<FetchUsers />} />
        <Route path="/search/:name" element={<SearchInput />} />
        {/* Remove or comment this line */}
        {/* <Route path="/DeleteProduct" element={<DeleteProduct />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
