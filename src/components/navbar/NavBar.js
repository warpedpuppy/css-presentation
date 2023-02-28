import { Link, useLocation } from 'react-router-dom';
import './NavHamburger.css';
import './NavBar.css';
function NavBar() {
	const location = useLocation();
	function returnActive(str) {
		return location.pathname.split('/')[1] === str ? 'active' : '';
	}
	return ( 

		// <nav className="nav-wrapper">
        //     <Link to="/" className="nav-brand">trying something</Link>
        //     <input className="nav-hamburger" id="main-checkbox" type="checkbox" />
        //     <div className="nav-hamburger-spans">
        //         <span></span>
        //         <span></span>
        //         <span></span>
        //     </div>
        //     <div className="nav-links">
		// 	<li className={ returnActive('') }><Link to="/">home</Link></li>
		// 	<li className={ returnActive('transitions') }><Link to="/transitions">transitions</Link></li>
		// 	<li className={ returnActive('animations') }><Link to="/animations">animations</Link></li>
		// 	<li className={ returnActive('easing') }><Link to="/easing">easing</Link></li>
        //     </div>
        // </nav>
		<nav id="main-nav">
			<Link to="/" className="nav-brand">vbnm</Link>
			<input className="nav-hamburger" id="main-checkbox" type="checkbox" />
			<div className="nav-hamburger-spans">
                <span></span>
                <span></span>
                <span></span>
            </div>
			<ul className="nav-links">
				<li className={ returnActive('') }><Link to="/">home</Link></li>
				<li className={ returnActive('transitions') }><Link to="/transitions">transitions</Link></li>
				<li className={ returnActive('animations') }><Link to="/animations">animations</Link></li>
				<li className={ returnActive('easing') }><Link to="/easing">easing</Link></li>
			</ul>
		</nav>
	 );
}

export default NavBar;