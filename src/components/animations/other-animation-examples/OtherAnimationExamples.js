import TabTemplate from '../../../templates/TabTemplate';
import Fanfare from './fanfare/Fanfare';
import Squares from './squares/Squares';
import Lines from './lines/Lines';
import MaineSVG from './MaineSVG/MaineSVG';
function OtherAnimationExamples() {
	const links = ['maine', 'lines', 'squares', 'fanfare']
	const content = [<MaineSVG />, <Lines />, <Squares />, <Fanfare />]
	return ( <TabTemplate links={links} content={content} />);
}

export default OtherAnimationExamples;