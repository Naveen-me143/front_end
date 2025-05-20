import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/FetchProducts.css";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [products, setProducts] = useState([]); // useState imported at top
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Double-click a card to edit the product</h2>
      <div className="row">
        {products.map((product) => (
          <div
            className="card col-md-4 mb-4 p-3 shadow-sm"
            key={product.id}
            onDoubleClick={() => navigate(`/editProduct/${product.id}`)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="card-img-top"
              style={{ height: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title.slice(0, 15)}</h5>
              <p className="price fw-bold">${product.price}</p>
              <p className="category text-muted">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateProduct;
