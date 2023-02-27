import './PageTemplate.css';
import SideBarTemplate from './SideBarTemplate';
import { Outlet } from 'react-router-dom';
function PageTemplate(props) {
	return ( 
		<div id='page-template'>
			<SideBarTemplate title={props.title} links={props.links} />
			<Outlet />
		</div>
	 );
}

export default PageTemplate;