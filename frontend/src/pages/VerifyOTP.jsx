import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const SERVER_ROOT = import.meta.env.VITE_SERVER_ROOT;

function verifyOTP({ cart }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const one = form.one.value;
    const two = form.two.value;
    const three = form.three.value;
    const four = form.four.value;
    const five = form.five.value;

    const otp = one + two + three + four + five;

    const response = await fetch(`${SERVER_ROOT}/api/verify-otp/${otp}/`);

    if (response.ok) {
      navigate("/auth/login");
    } else {
      const data = await response.json();
      setError(data?.message);
    }
  };

  return (
    <>
      <NavBar cart={cart} />

      <div className="mx-[1.5em] mt-[2em] bg-bgSecondary p-[1em] md:w-3/5 md:mx-auto">
        <h3 className="text-[1.2rem] mb-[1em]">Verify Account</h3>
        <p className="text-red-500 text-[0.9rem] mb-2">{error}</p>
        <form method="post" onSubmit={handleSubmit}>
          <div className="otp-form">
            <input type="text" name="one" maxLength="1" required />
            <input type="text" name="two" maxLength="1" required />
            <input type="text" name="three" maxLength="1" required />
            <input type="text" name="four" maxLength="1" required />
            <input type="text" name="five" maxLength="1" required />
          </div>

          <button
            className="w-full my-[1.5em] bg-textYellow p-3 text-black rounded"
            type="submit"
          >
            Verify Account
          </button>
        </form>
      </div>
    </>
  );
}

export default verifyOTP;
