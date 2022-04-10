import React, { useState } from "react";
import "./index.css";
import { SidebarData } from "./SidebarData";
import profile from "./profile.PNG";
import { Link } from "react-router-dom";

function Sidebar() {
  const [show, setShow] = useState(true);
  return (
    <div className="menubar">
      <button className="icon1" onClick={() => setShow(!show)}>
        <DehazeIcon />
      </button>

      {show && (
        <div className="sidebar">
          <div className="profile">
            <img id="img" src={profile} alt="" />
            <p>
              XYZ
              <br />
              (xyz@gecg28.ac.in)
            </p>
          </div>

          <ul className="listItem">
            {SidebarData.map((val, key) => {
              return (
                <li key={key} className="row">
                  <div id="icon">{val.icon}</div>
                  <Link id="title" to={`${val.link}`}>
                    {val.title}
                  </Link>
                </li>
              );
            })}
            ;
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
