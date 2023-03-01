import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import './NavHamburger.css';
import './NavBar.css';
function NavBar() {
	const location = useLocation();
	const navigate = useNavigate();
	const checkboxRef = useRef(null);
	function returnActive(str) {
		return location.pathname.split('/')[1] === str ? 'active' : '';
	}
	const clickHandler = pathname => {
		navigate(pathname);
		checkboxRef.current.checked = false;
	}
	window.addEventListener('resize', e => {
		if (checkboxRef.current) checkboxRef.current.checked = false;
	})
	return ( 
		<nav id="main-nav">
			<Link to="/" className="nav-brand">css</Link>
			<input className="nav-hamburger" id="main-checkbox" type="checkbox" ref={checkboxRef} />
			<div className="nav-hamburger-spans">
                <span></span>
                <span></span>
                <span></span>
            </div>
			<ul className="nav-links">
				<li className={ returnActive('') } onClick={() => clickHandler('/')}>home</li>
				<li className={ returnActive('transitions') } onClick={() => clickHandler('/transitions')}>transitions</li>
				<li className={ returnActive('animations') } onClick={() => clickHandler('/animations')}>animations</li>
				<li className={ returnActive('easing') } onClick={() => clickHandler('/easing')}>easing</li>
			</ul>
		</nav>
	 );
}

export default NavBar;