import React, { useState, useEffect, useContext } from "react";
import Product from "../components/Product";
import "../index.css";
import { UserContext } from "../contexts/UserContext";


function HomePage() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);

  const getProducts = () => {
    fetch("http://localhost:8000/products/")
    .then(response => response.json())
    .then(data => {
      setProducts(data);
    })
  };

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <React.Fragment>
      <div className="row">
        <h5><i>Logged in as { user.username }</i></h5>
        <br/>
        <h2>Products</h2>
        {
          (products.length > 0) ?
          (products.map(product => {
            return (
              <div className="col">
                <Product
                  key={ product.id }
                  image={ product.image }
                  name={ product.name }
                  price={ product.price }
                  tag={ product.category }
                />
              </div>
            ); 
          })) :
          (
            <div>
              <br/>
              <h3>No products available!!!</h3>
            </div>
          )
        }
      </div>
    </React.Fragment>
  );
}

export default HomePage;
