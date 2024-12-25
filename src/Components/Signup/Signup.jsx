// import React from "react";
// import Styles from "./index.module.css";

// const Signup = () => {
//   return (
//     <div className={Styles.container}>
//       <div className={Styles.leftInfo}>
//         <h1>Sign Up</h1>
//         <p>
//           Already have an account? <a href="#">Login here</a>
//         </p>
//         <form action="">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Enter your name here"
//             required
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter your email address"
//             required
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             required
//           />
//           <div>
//             <input type="checkbox" id="terms" required />
//             <label htmlFor="terms" className={Styles.checkbox}>
//               By signing up, you agree to receive updates and special offers.
//             </label>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <div className={Styles.rightImg}>
//         <img
//           src="https://truid.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftruid-usecases.90d0a50f.gif&w=640&q=75"
//           alt="Signup illustration"
//         />
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import Styles from "./index.module.css";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(true);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.leftInfo}>
        <h1>{isSignup ? "Sign Up" : "Login"}</h1>
        {isSignup ? (
          <p>
            Already have an account?{" "}
            <a href="#" onClick={toggleForm}>
              Login here
            </a>
          </p>
        ) : (
          <p>
            Don’t have an account?{" "}
            <a href="#" onClick={toggleForm}>
              Sign up here
            </a>
          </p>
        )}
        <form action="">
          {isSignup && (
            <>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name here"
                required
              />
            </>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
          {isSignup && (
            <div>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className={Styles.checkbox}>
                By signing up, you agree to receive updates and special offers.
              </label>
            </div>
          )}
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
      </div>
      <div className={Styles.rightImg}>
        <img
          src="https://truid.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftruid-usecases.90d0a50f.gif&w=640&q=75"
          alt={isSignup ? "Signup illustration" : "Login illustration"}
        />
      </div>
    </div>
  );
};

export default AuthForm;

