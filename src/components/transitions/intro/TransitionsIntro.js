import './TransitionsIntro.css';
import { useRef, useEffect, useState } from 'react';
function TransitionsIntro() {
	const finger = useRef(null);
	const [ hover, setHover ] = useState(false)
	useEffect(() => {
		finger.current.addEventListener("animationiteration", onHit);
	}, [])

	const onHit = () => {
		setHover(true)
		setTimeout(() => setHover(false), 500)
	}
	
	return ( 
		<section id="transition-intro">
			<div id="demo">
				<img src='/images/pointing-finger.png' alt='pointing finger' ref={finger} />
				<div className={ hover ? 'demo-btn hover' : 'demo-btn'}><div className="glow"></div>sample hover!</div>
			</div>
		
		</section> 
	);
}

export default TransitionsIntro;