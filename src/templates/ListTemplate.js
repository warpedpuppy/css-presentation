import "./ListTemplate.css";
import { useState } from 'react';
import LiTemplate from "./LiTemplate";
function ListTemplate({ title, labels, content, aside, open }) {

  return (
    <section class="list-template">
      <h4>{title}:</h4>
      <ul >
        {labels.map((label, index) => {
          return (
			<LiTemplate content={content[index] ? content[index] : "discussion"} label={label} open={open} />
            // <li>
            //   <input type="checkbox" checked={ checked } onClick={ () => setChecked(!checked)} />
            //   <div className="label">{title}</div>
            //   <div className="discussion">
            //     {content[index] ? content[index] : "discussion"}
            //   </div>
            // </li>
          );
        })}
      </ul>
	  <div class="aside">{ aside } </div>
    </section>
  );
}
export default ListTemplate;
