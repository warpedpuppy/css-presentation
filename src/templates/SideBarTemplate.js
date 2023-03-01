import './SideBarTemplate.css';
import { Link, useLocation } from 'react-router-dom';
function SideBarTemplate(props) {
	const location = useLocation();
	function returnActive(str) {
		return location.pathname.split('/')[2] === str ? 'active' : '';
	}
	return ( 
		<div id='side-bar'>
			<h4><Link to={props.root}>{props.title}</Link></h4>
			<ul>
				{
					props.links.map( (link, index) => {
						return (
							<li 
								className={ returnActive(link) } 
								key={`link${link}${index}`}>
								<Link to={link}>{ link }</Link>
							</li>
						)
					})
				}
			</ul>
		</div>
	 );
}

export default SideBarTemplate;