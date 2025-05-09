import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchInput = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(results);
  }, [name, data]);

  return (
    <div className="container mt-4">
      <h3>Search results for: "{name}"</h3>
      {filteredData.length > 0 ? (
        <ul className="list-group">
          {filteredData.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching items found.</p>
      )}
    </div>
  );
};

export default SearchInput;