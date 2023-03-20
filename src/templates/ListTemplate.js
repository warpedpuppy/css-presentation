import "./ListTemplate.css";
function ListTemplate({ title, labels, content, aside }) {
  return (
    <section class="list-template">
      <h4>{title}:</h4>
      <ul >
        {labels.map((title, index) => {
          return (
            <li>
              <input type="checkbox" />
              <div className="label">{title}</div>
              <div className="discussion">
                {content[index] ? content[index] : "discussion"}
              </div>
            </li>
          );
        })}
      </ul>
	  <div class="aside">{ aside } </div>
    </section>
  );
}
export default ListTemplate;
