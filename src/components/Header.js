import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Monika Knapczyk</h1>
        <Typed
          className="typed-text"
          strings={[
            "pisarka",
            "poetka",
            "wydawca",
            "blogerka",
            "rocznik 1977",
            "z wykształcenia: doktor nauk technicznych",
            "prywatnie - mama dwójki dzieci",
            "radomianka",
            "mieszka w Puławach",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Kontakt ze mną
        </a>
      </div>
    </div>
  );
};

export default Header;
