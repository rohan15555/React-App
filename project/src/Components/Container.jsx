import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Container.css";
import SidebarLink from "./SidebarLink";
import "./Slidebar.css"


function Container() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <div>
          <ul className="nav1">
            <Link className="link" to="/home">
              {" "}
              <li>Home</li>
            </Link>
            <Link className="link" to="/about">
              {" "}
              <li>About</li>
            </Link>
            <Link className="link" to="/contacts">
              {" "}
              <li>Contacts</li>
            </Link>
          </ul>
        
      
        
        </div>
        
        
      </div>
      <div>
          <SidebarLink/>
       
        <div style={{ width: "400px"  }}>
          <Outlet  className="outlet"/>
        </div>
        </div>
    </div>
  );
}

export default Container;
