import React from "react";
import "./Pagenotfound.scss";
import notfound from "../../assets/pnf.jpg";
function Pagenotfound() {
  return (
    <div>
      <h1 className="text_center">
        You have lost. Please click logo to go Home.
      </h1>
      <div className="container_it">
        <img src={notfound} alt="Not found" className="img_nf" />
      </div>
    </div>
  );
}

export default Pagenotfound;
