import React, { useEffect, useState } from "react";
import Axios from "axios";

function FetchData() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {products.map(p => (
        <h3 key={p.id}>{p.title}</h3>
      ))}
    </div>
  );
}

export default FetchData;
