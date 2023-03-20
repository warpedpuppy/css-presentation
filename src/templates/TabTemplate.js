import "./TabTemplate.css";
import { useState } from "react";
function TabTemplate({links, content}) {
  const [active, setActive] = useState(0);

  return (
    <div className="tab-parent">
      <ul className="tabs">
        {links.map((link, index) => {
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
        {content.map((item, index) => {
          return (
            <div
              className={
                index === active ? "active tab-content" : "tab-content"
              }
              key={`tab-content-${index}`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TabTemplate;
