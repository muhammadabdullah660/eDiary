import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [cred, setcred] = useState({
    userName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const onChange = (e) => {
    setcred({ ...cred, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, email, password } = cred;
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.token);
      navigate("/signIn");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={cred.userName}
            name="userName"
            placeholder="User Name"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={cred.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={cred.password}
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            value={cred.cpassword}
            name="cpassword"
            placeholder="Confirm Password"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
