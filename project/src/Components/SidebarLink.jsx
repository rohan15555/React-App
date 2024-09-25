import React from "react";
import { Link } from "react-router-dom";

function SidebarLink() {
  return (
    <div className="new">
      <ul className="slidebar">
        <Link className="link" to="/Slidebar">
         
          <li>Products</li>
        </Link>
        <Link className="link" to="/Slidebar2">
       
          <li>Category</li>
        </Link>
      </ul>
    </div>
  );
}

export default SidebarLink;
