import React from "react";

function Tag() {
  return (
    <div class="container mt-5" id="blog">
      <div class="row">
        <div class="col-9 d-flex offset-sm-2">
          <h3>Tags:</h3>
          <a class="fs-4 ms-4 text-dark" href="">
            Product design,
          </a>
          <a class="fs-4 text-dark" href="">
            &nbsp;culture
          </a>
        </div>
        <div class="row mt-3">
          <div class="col-8 offset-sm-2">
            <img class="img-fluid" src="/assets/Line 11.png" alt="" />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-1 offset-md-2">
            <img class="img-fluid" src="/assets/Mask Group.png" alt="" />
          </div>
          <div class="col-7 ms-4 flex-row mt-3 maskgrup1">
            <h3 class="fw-bold">Mika MAtikainen</h3>
            <p>
              is a Design Founder & Advisor, Berlin School of Creative
              Leadership Executive MBA participant, Zippie advisor, Wolt
              co-founder, and Nordic Rose stakeholder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tag;
