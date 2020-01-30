import React from "react";
import Contact from "./components/Contact";

function Opp() {
  return (
    <div className="Contact">
      <Contact
        nameavatar="https://randomuser.me/api/portraits/men/22.jpg"
        names="Joe Black"
        text="offline"
        status="false"
      />

      <Contact
        nameavatar="https://randomuser.me/api/portraits/women/44.jpg"
        names="Nia Harris"
        text="online"
        status="true"
      />

      <Contact
        nameavatar="https://randomuser.me/api/portraits/women/6.jpg"
        names="Clueless Lady"
        text="online"
        status="true"
      />
    </div>
  );
}

export default Opp;
