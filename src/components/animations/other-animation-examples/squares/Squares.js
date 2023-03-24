import './Squares.css';
function Squares() {
	return ( <svg id="squares">
		<rect class="leftBack vertBox" />
		<rect class="rightBack vertBox" />
		<rect class="topBack horizBox" />
		<rect class="bottomBack horizBox" />
		  
		<rect class="leftMiddle vertBox" />
		<rect class="rightMiddle vertBox" />
		<rect class="topMiddle horizBox" />
		<rect class="bottomMiddle horizBox" />
		  
		<rect class="leftTop vertBox" />
		<rect class="rightTop vertBox" />
		<rect class="topTop horizBox" />
		<rect class="bottomTop horizBox" />
		</svg> );
}

export default Squares;