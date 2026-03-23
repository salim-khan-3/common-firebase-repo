import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../Firebase.init";

const Register = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("form submited successful", email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("alter create accout or a new user...",result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero-content flex flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register Now</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
