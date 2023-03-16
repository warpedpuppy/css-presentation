import './TabTemplate.css';
import { Link, Outlet } from 'react-router-dom';
function TabTemplate (props) {
	return ( 
		<div className="tab-parent">
			<ul className="tabs">
				{
					props.links.map( (link, index) => {
						return <li key={`link${link}${index}`}><Link to={link}>{ link }</Link></li>
					})
				}
			</ul>
			<Outlet />
		</div>
		
	 );
}

export default TabTemplate ;