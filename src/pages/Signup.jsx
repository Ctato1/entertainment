import "../styles/signup.css";
import { Link } from "react-router-dom";

const Signup = () => {

  return (
    <div className="signup">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="26"
          viewBox="0 0 33 26"
          fill="none"
        >
          <path
            d="M26.463 0.408386L29.663 6.80839H24.863L21.663 0.408386H18.463L21.663 6.80839H16.863L13.663 0.408386H10.463L13.663 6.80839H8.86298L5.66298 0.408386H4.06298C2.29498 0.408386 0.878976 1.84039 0.878976 3.60839L0.862976 22.8084C0.862976 24.5764 2.29498 26.0084 4.06298 26.0084H29.663C31.431 26.0084 32.863 24.5764 32.863 22.8084V0.408386H26.463Z"
            fill="#FC4747"
          />
        </svg>
      </div>
      <div className="login__box">
        <h4>Sign Up</h4>
        <form className="login__box-inputs">
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat password" />
        </form>
        <button className="btn" >
        Create an account
        </button>
        <p className="login__link">
        Already have an account?<Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;