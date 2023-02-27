import { Routes, Route, Link } from 'react-router-dom';
import HamburgerMenu from './hamburger-menu/HamburgerMenu';
import SideBars from './side-bars/SideBars';
import TabTemplate from '../../../templates/TabTemplate';
function SlideIns() {
	const links = ['hamburger-menu', 'side-bars']
	return ( 
		<>
			<Routes>
				<Route path="/" element={ <TabTemplate title="transitions" links={links} /> } >
					<Route path='/' element={ <p>slide ins</p> }/>	
					<Route path='hamburger-menu' element={ <HamburgerMenu /> }/>
					<Route path='side-bars' element={ <SideBars /> }/>
				</Route>
			</Routes>
		</>
	 );
}

export default SlideIns;