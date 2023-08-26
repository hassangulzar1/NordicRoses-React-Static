import React from "react";
import "./SignUp.css";
function SignUp() {
  return (
    <div class="container my-5 text-center d-flex justify-content-center">
      <div class="sign-up my-5">
        <h1 class="fw-bold">Sign up for the newsletter</h1>
        <p class="mt-4">
          If you want relevant updates occasionally, sign up for the <br />
          private newsletter. Your email is never shared.
        </p>
        <input type="text" placeholder="Enter Your email..." />
        <button class="btn">SIGN UP</button>
      </div>
    </div>
  );
}

export default SignUp;
