import React, { useEffect, useState } from "react";
import axios from "axios";

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const deleted = products.find((p) => p.id === id);

      axios
        .delete(`https://fakestoreapi.com/products/${id}`)
        .then(() => {
          alert("Product deleted!");
          setProducts(products.filter((product) => product.id !== id));
          setDeletedProducts([...deletedProducts, deleted]);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="container mt-4">
      <h3>List of Products</h3>{/* //if you want to add a title, here to change the title */}
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title.slice(0, 25)}</h5>
                <p className="fw-bold">${product.price}</p>
                <button
                  className="btn btn-danger w-100"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {deletedProducts.length > 0 && (
        <>
          <hr />
          <h4 className="mt-4">Deleted Products</h4>
          <div className="row">
            {deletedProducts.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100 shadow border-danger">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top p-3"
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-danger">{product.title.slice(0, 25)}</h5>
                    <p className="fw-bold text-muted">${product.price}</p>
                    <span className="badge bg-danger">Deleted</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DeleteProduct;
