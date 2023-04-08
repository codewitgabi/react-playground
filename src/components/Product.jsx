import "../index.css";

function Product(props) {
  return (
    <div className="product-container">
      <img
        className="product-image"
        src={ props.image }
        alt="product"
      />
      <hr className="hr" />
      <legend className="prod-name">{ props.name }</legend>
      <small align="center">${ props.price }</small>
      <div align="center">
        <button className="add-to-cart">
          Cart <span>+</span>
        </button>
      </div>
      <span className="tag">{ props.tag }</span>
    </div>
  );
}

export default Product;
