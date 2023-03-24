import "./AnimationPlayState.css";
function AnimationPlayState() {
  return (
    <div id="cube-container">
      <div id="cube">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="paused">
        <h4>paused</h4>
        <p>move cursor out of this section to resume!</p>
      </div>
    </div>
  );
}

export default AnimationPlayState;
