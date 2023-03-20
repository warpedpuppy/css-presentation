import { useState } from "react";
function LiTemplate({ label, content, open }) {

  const [checked, setChecked] = useState(open ? true : false);

  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <div className="label">{ label }</div>
      <div className="discussion">{ content }</div>
    </li>
  );
}
export default LiTemplate;
