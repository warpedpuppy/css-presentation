import './SideBarTemplate.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
function SideBarTemplate({root, title, links}) {
	const location = useLocation();
	const navigate = useNavigate();
	function returnActive(str) {
		return location.pathname.split('/')[2] === str ? 'active' : '';
	}
	return ( 
		<div id='side-bar'>
			<h4 onClick={ () => navigate(root)}>{title}</h4>
			<ul>
				{
					links.map( (link, index) => {
						return (
							<li 
								className={ returnActive(link) } 
								key={`link${link}${index}`}>
								<span></span>
								<Link to={link}>{ link.replace('-', ' ') }</Link>
							</li>
						)
					})
				}
			</ul>
		</div>
	 );
}

export default SideBarTemplate;