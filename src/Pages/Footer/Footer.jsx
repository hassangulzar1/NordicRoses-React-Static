import React from "react";

function Footer() {
  return (
    <div class="container-fluid mt-5 bg-dark" id="links">
      <div class="row mt-5">
        <div class="col mt-5">
          <img class="img-fluid" src="/assets/Group 40.png" alt="" />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col mt-5 text-center">
          <img src="/assets/NORDIC ROSE1.png" alt="" />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <p class="text-light fs-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            <br />
            velit tempus erat egestas efficitur. In hac habitasse platea <br />
            dictumst. Fusce a nunc eget ligula suscipit finibus.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col mt-4 text-center">
          <a class="text-light fs-3" href="">
            Twitter
          </a>
          <a class="text-light fs-3 mx-5" href="">
            LinkedIn
          </a>
          <a class="text-light fs-3" href="">
            RSS
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col text-center mt-5">
          <p class="text-light fs-5">
            &copy; 2012-2020 Nordic Rose Co. <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
