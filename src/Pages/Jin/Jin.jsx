import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
function Jin() {
  return (
    <>
      <div class="container jin-img text-center mt-5">
        <img class="img-fluid" src="assets/Rectangle 8.png" alt="" />
        <p
          class="mt-3"
          style={{ fontFamily: "Source Serif Pro, serif", fontSize: "2rem" }}
        >
          Image caption centered this way and I'll make this a bit longer <br />
          to indicate the amount of line-height.
        </p>
      </div>
      <Mobile />
      <Desktop />
    </>
  );
}

export default Jin;
