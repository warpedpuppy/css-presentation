import "./TransitionIntro.css";
function TransitionIntro() {
  return (
    <section id='transition-intro'>
      <h4>Let's build this together!</h4>
	
	<div id="transition-example-project">
      <nav>
        <h1>brand</h1>
        <input type="checkbox" />
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <a href="#">menu item 1</a>
          </li>
          <li>
            <a href="#">menu item 2</a>
          </li>
          <li>
            <a href="#">menu item 3</a>
          </li>
          <li>
            <a href="#">menu item 4</a>
          </li>
        </ul>
      </nav>
      <main>
        <aside>
          <ul>
            <li>
              <a href="#">
                <span></span>sidebar item 1
              </a>
            </li>
            <li>
              <a href="#">
                <span></span>sidebar item 2
              </a>
            </li>
          </ul>
        </aside>
        <div>
          <div id="div-with-hover-transition">
            <button>hover over and click me</button>
            <div class="glow-background"></div>
          </div>
        </div>
      </main>
	  </div>
    </section>
  );
}

export default TransitionIntro;
