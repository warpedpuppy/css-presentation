import TabTemplate from '../../../templates/TabTemplate';
import Fanfare from './fanfare/Fanfare';
import Squares from './squares/Squares';
import Lines from './lines/Lines';
import MaineSVG from './MaineSVG/MaineSVG';
function OtherAnimationExamples() {
	const links = ['squares', 'lines', 'maine', 'fanfare']
	const content = [<Squares />,<Lines />,<MaineSVG />,   <Fanfare />]
	return ( <TabTemplate links={links} content={content} />);
}

export default OtherAnimationExamples;