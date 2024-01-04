import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const SERVER_ROOT = "http://localhost:8000";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`${SERVER_ROOT}/api/products/`);
      const data = await response.json();

      if (response.ok) {
        setProducts(data);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="body-secondary">
      <NavBar />
      <div className="body mx-[1em] my-[2em]">
        <div className="grid grid-cols-2 gap-x-[1em] gap-y-[1em]">
          {products ?
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            }) :
            <h1>No products at the moment</h1>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
