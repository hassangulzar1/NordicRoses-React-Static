import React from "react";
import CardsDesktop from "./CardsDesktop";
import Mobile from "./Mobile";
function WhatNext() {
  return (
    <>
      <div class="container" id="projects">
        <div class="row mt-5">
          <div class="col text-center mt-5 text-area">
            <h1 class="fw-bold text-dark">What to read next</h1>
          </div>

          <div class="row mt-5 text-center">
            <CardsDesktop
              title={
                "Connecting artificial intelligence with digital product design"
              }
              img={"assets/Rectangle 4.png"}
            />
            <CardsDesktop
              title={"Hello world, or, in other words, why this blog exists"}
              img={"assets/Rectangle 11.png"}
            />
            <CardsDesktop
              title={
                "Here are some things you should know regarding how we work"
              }
              img={"assets/Rectangle 10.png"}
            />
          </div>
        </div>
      </div>
      <Mobile />
    </>
  );
}

export default WhatNext;
