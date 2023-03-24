import "./TransitionProject.css";
function TransitionProject() {
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
            <button>menu item 1</button>
          </li>
          <li>
            <button>menu item 2</button>
          </li>
          <li>
            <button>menu item 3</button>
          </li>
          <li>
            <button>menu item 4</button>
          </li>
        </ul>
      </nav>
      <main>
        <aside>
          <ul>
            <li>
              <button>
                <span></span>sidebar item 1
              </button>
            </li>
            <li>
              <button>
                <span></span>sidebar item 2
              </button>
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

export default TransitionProject;
