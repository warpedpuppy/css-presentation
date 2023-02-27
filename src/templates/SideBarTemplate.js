import './SideBarTemplate.css';
import { Link } from 'react-router-dom';
function SideBarTemplate(props) {
	return ( 
		<div id='side-bar'>
			<h4>{props.title}</h4>
			<ul>
				{
					props.links.map( (link, index) => {
						return <li key={`link${link}${index}`}><Link to={link}>{ link }</Link></li>
					})
				}
			</ul>
		</div>
	 );
}

export default SideBarTemplate;