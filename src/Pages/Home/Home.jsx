import React from "react";
import HomeDesktop from "./HomeDesktop";
import HomePhone from "./HomePhone";
function Home() {
  const h1 = {
    textAlign: "center",
    fontFamily: "Merriweather, serif",
    fontSize: "5rem",
    letterSpacing: "0.1rem",
  };
  const p = {
    letterSpacing: "0.3rem",
    fontSize: "2rem",
  };
  return (
    <>
      <div className="container home-text text-center mt-5">
        <h1 className="fw-bold" style={h1}>
          A Few Words about this blog <br />
          patform,ghost. how this <br />
          site was made
        </h1>
        <p className="my-5" style={p}>
          Why Ghost(& figma) instead of medium, Wordpress <br />
          or ther options?
        </p>
      </div>
      <HomeDesktop />
      <HomePhone />
    </>
  );
}

export default Home;
