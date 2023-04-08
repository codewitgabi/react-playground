import "../form.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const login_url = "http://localhost:8000/login/";
    /* Get Form Data */
    const username = e.target.username.value;
    const password = e.target.password.value;

    fetch(login_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      const token = data.token;
      const username = data.username;
      const user_id = data.user_id;

      if (token) {
        /* Store user's data */
        const loggedInUser = {
          "username": username,
          "token": token,
          "user_id": user_id
        };
        
        setUser(loggedInUser);
        localStorage.setItem("userToken", JSON.stringify(loggedInUser));

        /* Redirect User */
        navigate("/");
      } else {
        document.getElementById("auth-error").textContent = "Invalid username or password"
      }
    })
    .catch(error => console.log(error))

    e.target.reset();
  };

  return (
    <div className="form-wrapper">
      <legend className="title">Sign In</legend>
      <p id="auth-error"></p>
      <form onSubmit={ handleSubmit } method="post">
        <p>Username<span>*</span></p>
        <input
          type="text"
          name="username"
          required="true"
          placeholder="Username"
        />
        <p>Password<span>*</span></p>
        <input
          type="password"
          name="password"
          required="true"
          placeholder="Password"
        />
        <button type="submit" className="auth-btn">Sign In</button>
      </form>
    </div>
  );
}

export default LoginPage;
