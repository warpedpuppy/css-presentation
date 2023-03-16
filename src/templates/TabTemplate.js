import "./TabTemplate.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
function TabTemplate(props) {
  const [active, setActive] = useState(0);

  return (
    <div className="tab-parent">
      <ul className="tabs">
        {props.links.map((link, index) => {
          return (
            <li
              className={index === active ? "active" : ""}
              key={`link${link}${index}`}
			  onClick={() => setActive(index)}
            >
              {link}
            </li>
          );
        })}
      </ul>
      <div className="tab-body">
        {props.content.map((item, index) => {
          return (
			<div className={index === active ? "active tab-content" : "tab-content"}>
				{item}
				</div>);
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default TabTemplate;
