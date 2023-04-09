import "../index.css";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Context";
import { useContext } from "react";


function Nav(props) {
  const { user, setUser, products } = useContext(Context);

  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("userToken");
    setUser({});
  };

  return (
    <nav>
      <Link to="/">ReactShop</Link>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">
              Cart<sup className="cart-total">{ products.filter(product => product.quantity > 0).length }</sup>
            </Link>
          </li>
          <li>
            {
              !user.token ?
              (<Link to="login" className="btn-link">Sign In</Link>) :
              (<Link to="/" onClick={ handleLogout } className="btn-link">Logout</Link>)
            }
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
