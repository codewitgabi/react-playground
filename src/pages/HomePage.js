import React, { useEffect, useContext } from "react";
import Product from "../components/Product";
import "../index.css";
import { Context } from "../contexts/Context";


function HomePage() {
  const { user, products, setProducts } = useContext(Context);

  const getProducts = () => {
    fetch("http://localhost:8000/products/")
    .then(response => response.json())
    .then(data => {
      setProducts(data);
    })
  };

  const handleAddToCart = product => {
    const newProduct = [...products];
    const index = newProduct.indexOf(product);
    newProduct[index].quantity++;
    setProducts(newProduct);
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
                  product={ product }
                  onClick={ handleAddToCart }
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
