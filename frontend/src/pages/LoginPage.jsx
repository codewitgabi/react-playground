import { Link } from "react-router-dom";
import { EyeSlash } from "react-bootstrap-icons";
import NavBar from "../components/NavBar";

function LoginPage() {
  return (
    <>
      <NavBar />

      <div className="mx-[1.5em] mt-[2em] bg-bgSecondary p-[1em]">
        <h3 className="text-[1.2rem] mb-[1em]">Login to your account</h3>
        <form method="post">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 my-1 outline-none focus:border focus:border-textYellow bg-bgPrimary"
            />
          </div>
          <div className="relative">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full p-2 my-1 outline-none focus:border focus:border-textYellow bg-bgPrimary"
            />
            <EyeSlash className="absolute top-[5px] right-0" />
          </div>

          <button
            className="w-full my-[1.5em] bg-textYellow p-3 text-black rounded"
            type="submit"
          >
            Login
          </button>
        </form>

        <p>
          Not registered yet?{" "}
          <Link to="/auth/register" className="underline text-textYellow">
            Register
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
