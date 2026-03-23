import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase-initialized";

const Register = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("successfulll");
        const email = e.target.email.value;
        const password = e.target.password.value;


        createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div className="hero-content flex-col">
      <div className="text-center ">
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
                {/* email */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
