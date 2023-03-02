import './Easing.css';
import { useState, useEffect, useRef } from 'react';
function Easing() {

	const [easing, setEasing] = useState('linear')
	const [left, setLeft] = useState('0');
	const [property, setProperty] = useState('left');
	const v = useRef(null);
	useEffect( () => {
		v.current.addEventListener("transitionstart", event => {
			console.log('start')
		});
		v.current.addEventListener("transitionend", event => {
		
			console.log('end')
		});
	}, [])

	return ( 
		<section id="easing">
			<h1>easing</h1>
			<ul>
				<li>
					<a 
						href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function"
						target="_blank"
						rel="noreferrer"
					>mdn transition easing</a>
				</li>
				<li>
					<a 
						href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function"
						target="_blank"
						rel="noreferrer"
					>mdn animation easing</a>
				</li>
			</ul>
			
			
			<select onChange={e => setEasing(e.target.value)}>
				<option>linear</option>
				<option>ease-in</option>
				<option>ease-out</option>
				<option>ease-in-out</option>
			</select>
			<button onClick={() => setLeft(left === '0' ? 'calc(100% - 60px)' : '0')}>start</button>
			<div id="track">
				<div ref={v} id="vehicle" style={{transitionTimingFunction: easing, left, transitionProperty: property, transitionDuration: '1s'}}></div>
			</div>
		</section>
	 );
}

export default Easing;