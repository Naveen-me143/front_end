import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const search = useRef("");
  const navigate = useNavigate();

  const searchFunc = (e) => {
    e.preventDefault();
    const query = search.current.value.trim();
    if (query) {
      navigate("/search/" + query);
      search.current.value = ""; // Clear the input after search
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <Link to="/products" className="btn btn-outline-light me-2">Products</Link>
          <Link to="/users" className="btn btn-outline-light me-2">Users</Link>
          <Link to="/DeleteProduct" className="btn btn-outline-light me-2">Delete Product</Link>
        </div>
        <form className="d-flex ms-auto" role="search" onSubmit={searchFunc}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
            ref={search}
          />
          <button className="btn btn-light" type="submit">
            <i className="bi bi-search"></i> Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
