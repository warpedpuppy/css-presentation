import HamburgerMenu from './hamburger-menu/HamburgerMenu';
import SideBars from './side-bars/SideBars';
import TabTemplate from '../../../templates/TabTemplate';
function SlideIns() {
	const links = ['hamburger-menu', 'side-bars']
	const content = [<HamburgerMenu />, <SideBars />]
	return ( 
		<TabTemplate title="transitions" links={links} content={content} />
	 );
}

export default SlideIns;