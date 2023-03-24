import TabTemplate from '../../../templates/TabTemplate';
import Fanfare from './fanfare/Fanfare';
import Squares from './squares/Squares';
import Lines from './lines/Lines';
function OtherAnimationExamples() {
	const links = ['fanfare', 'lines', 'squares']
	const content = [<Fanfare />, <Lines />, <Squares />]
	return ( <TabTemplate links={links} content={content} />);
}

export default OtherAnimationExamples;