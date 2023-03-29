import "./ListTemplate.css";
import LiTemplate from "./LiTemplate";
function ListTemplate({ title, labels, content, aside, open }) {

  return (
    <section className="list-template">
      <h4>{title ? `${title}:`: ''}</h4>
      <ul >
        {labels.map((label, index) => {
          return (
			<LiTemplate key={`liTemplate${index}`} content={content[index] ? content[index] : ""} label={label} open={open} />
          );
        })}
      </ul>
	  <div className="aside">{ aside } </div>
    </section>
  );
}
export default ListTemplate;
