import { Link, useNavigate } from "react-router-dom";
import { EyeSlash } from "react-bootstrap-icons";
import NavBar from "../components/NavBar";

const SERVER_ROOT = import.meta.env.VITE_SERVER_ROOT;

function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    const response = await fetch(`${SERVER_ROOT}/api/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    if (response.ok) {
      navigate("/auth/verify-otp");
    } else {
      console.log(response);
      alert("An error occured");
    }
  };

  return (
    <>
      <NavBar />

      <div className="mx-[1.5em] mt-[2em] bg-bgSecondary p-[1em]">
        <h3 className="text-[1.2rem] mb-[1em]">Create personal account</h3>
        <form method="post" onSubmit={handleSubmit}>
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
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
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

          <p className="mt-4 text-[0.8rem]">
            By creating an account, I agree to Binance&apos;s{" "}
            <Link to="/" className="underline text-textYellow">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/" className="underline text-textYellow">
              Privacy Policy
            </Link>
          </p>

          <button
            className="w-full my-[1.5em] bg-textYellow p-3 text-black rounded"
            type="submit"
          >
            Register
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/auth/login" className="underline text-textYellow">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}

export default RegisterPage;
