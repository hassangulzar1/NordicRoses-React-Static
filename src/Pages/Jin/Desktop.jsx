import React from "react";

function Desktop() {
  return (
    <div class="container d-none d-sm-block mt-5">
      <div class="row">
        <div class="col-8 offset-md-2 text-area">
          <p>
            Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Aliquam quis posuere ligula. <br />
            <br />
            In eu dui molestie, molestie lectus eu, semper lectus. Proin at
            justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi
            arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id.
            Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
          </p>
          <br />
          <br />
          <p>A list Looks Like This:</p>
          <li>First item in the list</li>
          <br />
          <li>
            Second item in the list lorem ipsum dolor sit amet nunc felis dolor
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;lorem ipsum sit amet
          </li>
          <br />
          <li>Third item in the list</li>
          <br />
          <br />
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula.
          </p>
          <br />
          <p>
            Thanks for reading, <br />
            Mika
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col text-center mt-5">
          <img
            class="py-4 img-fluid px-5 mx-0 border-bottom border-top border-start"
            src="assets/Group 38.png"
            alt=""
          />
          <img src="assets/Line 4.png" height="58px" alt="" />
          <img
            class="py-4 img-fluid px-5 mx-0 border-bottom border-end border-top"
            src="assets/Group 37.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Desktop;
