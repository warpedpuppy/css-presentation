import { Link, useLocation } from 'react-router-dom';

import './NavBar.css';
function NavBar() {
	const location = useLocation();
	function returnActive(str) {
		return location.pathname.split('/')[1] === str ? 'active' : '';
	}
	return ( 
		<nav id="main-nav">
			<ul>
				<li className={ returnActive('') }><Link to="/">home</Link></li>
				<li className={ returnActive('transitions') }><Link to="/transitions">transitions</Link></li>
				<li className={ returnActive('animations') }><Link to="/animations">animations</Link></li>
			</ul>
		</nav>
	 );
}

export default NavBar;