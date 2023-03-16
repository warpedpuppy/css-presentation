import Buttons from './buttons/Buttons';
import AbsPosDivs from './abs-pos-divs/AbsPosDivs';
import TabTemplate from '../../../templates/TabTemplate';
function FadeIns() {
	const links = ['buttons', 'abs-pos-divs'];
	const content = [<Buttons />, <AbsPosDivs />]
	return (
			<TabTemplate title="transitions" links={links} content={content}/>
	 );
}

export default FadeIns;