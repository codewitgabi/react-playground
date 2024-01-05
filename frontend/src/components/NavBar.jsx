import { Link } from "react-router-dom";
import { Cart2 } from "react-bootstrap-icons";

function NavBar({ cart }) {
  return (
    <header className="bg-bgSecondary">
      <nav className="px-[1.5em] py-[1em] flex justify-between items-center md:w-11/12 md:mx-auto">
        <Link to="/" className="text-textYellow uppercase">
          Binshop
        </Link>
        <div className="flex gap-[0.5em] items-center">
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/register">Register</Link>
          <Link className="relative">
            <Cart2 className="text-[1.5rem]" />
            <p className="absolute -top-[0.7em] -right-[0.8em] font-bold bg-textYellow text-black rounded-full px-[5px] pt-[1px] text-[0.7rem]">
              {cart?.length}
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
