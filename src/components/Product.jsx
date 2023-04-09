import "../index.css";

function Product({ product, onClick }) {
  return (
    <div className="product-container">
      <img
        className="product-image"
        src={ product.image }
        alt="product"
      />
      <hr className="hr" />
      <legend className="prod-name">{ product.name }</legend>
      <small align="center">${ product.price }</small>
      <div align="center">
        <button onClick={ () => onClick(product) } className="add-to-cart">
          Cart <span>{ product.quantity }</span>
        </button>
      </div>
      <span className="tag">{ product.category }</span>
    </div>
  );
}

export default Product;
