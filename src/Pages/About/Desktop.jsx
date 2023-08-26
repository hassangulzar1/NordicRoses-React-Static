import React from "react";
function Desktop() {
  return (
    <>
      <div className="container d-none d-sm-block mt-5 text-center" id="about">
        <img className="img-fluid" src="/assets/Line 3.png" alt="" />
      </div>
      <div className="container mt-5 d-none d-sm-block text-center">
        <div className="row">
          <div className="col-1 offset-2">
            <img className="img-fluid" src="assets/Mask Group.png" alt="" />
          </div>
          <div className="col-2 mt-3 maskgrup1">
            <h3 className="fw-bold">Mika MAtikainen</h3>
            <p>Apr 15, 2020 · 4 min read</p>
          </div>
          <div className="col-2 offset-3">
            <img src="assets/Group 4.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container d-none d-sm-block mt-5">
        <div className="row">
          <div className="col-8 offset-md-2 text-area">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              velit tempus erat egestas efficitur. In hac habitasse platea
              dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra.
            </p>
            <br />
            <p>
              className aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu
              dui molestie, molestie lectus eu, semper lectus.
            </p>
            <h1 className="fw-bold mt-5 mb-4">Next on the pipeline</h1>
            <p>
              Duis eu velit tempus erat egestas efficitur. In hac habitasse
              platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra. className aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <br />
            <p>
              Morbi efficitur auctor metus, id mollis lorem pellentesque id.
              Nullam posuere maximus dui et fringilla.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Desktop;
