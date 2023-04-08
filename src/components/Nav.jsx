import "../index.css";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


function Nav(props) {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = e => {
    e.preventDefault();
    localStorage.clear();
    setUser({});
  };

  return (
    <nav>
      <Link to="/">ReactShop</Link>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">
              Cart<sup className="cart-total">0</sup>
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
