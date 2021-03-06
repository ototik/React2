import React from "react";
import "./Contactcss.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.nameavatar} alt={props.names} />
      <div className="name">{props.names} </div>


      <div className="status">
        <div className="format">
        <div className="status-text">
          {props.text === "online" ? "online" : "offline"}
        </div>
        {props.status === "true" ? (
          <div className="status-online" />
        ) : (
          <div className="status-offline" />
        )}
      </div>
      </div>
    </div>
  );
}

export default Contact;
