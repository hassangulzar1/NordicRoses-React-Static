import React from "react";
import CardsMobile from "./CardsMobile";
function Mobile() {
  return (
    <div className="container d-none d-sm-block">
      <div className="row text-center">
        <CardsMobile
          title={
            "A few words about this blogplatform, Ghost, and howthis site was made"
          }
          img={"/assets/Rectangle 37.png"}
        />
        <CardsMobile
          title={
            "Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better"
          }
          img={"/assets/Rectangle 39.png"}
        />
        <CardsMobile
          title={
            "How modern remotworking tools get along with      Old School Cowboy's   methods"
          }
          img={"/assets/Rectangle 38.png"}
        />
      </div>
    </div>
  );
}

export default Mobile;
