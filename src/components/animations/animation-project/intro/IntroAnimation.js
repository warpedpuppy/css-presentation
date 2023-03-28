import "./IntroAnimation.css";
function IntroAnimation() {
  return (
    <div>
      <h2>Let's learn how animations work!</h2>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 250"
        id="intro-svg"
      >
        <g id="background">
          <rect class="cls-10" width="500" height="250" />
        </g>
        <g id="star">
          <polygon
            class="cls-1"
            points="250 175 265.45 142.08 300 136.8 275 111.18 280.9 75 250 92.08 219.1 75 225 111.18 200 136.8 234.55 142.08 250 175"
          />
        </g>
        <g id="arrow1">
          <polygon
            class="cls-7"
            points="3.78 -10.28 3.78 -25 -25 0 3.78 25 3.78 10.28 25 10.28 25 -10.28 3.78 -10.28"
          />
        </g>
        <g id="arrow2">
          <polygon
            class="cls-3"
            points="-3.78 -10.28 -3.78 -25 25 0 -3.78 25 -3.78 10.28 -25 10.28 -25 -10.28 -3.78 -10.28"
          />
        </g>
        <g id="arrow3">
          <polygon
            class="cls-8"
            points="10.28 3.78 25 3.78 0 -25 -25 3.78 -10.28 3.78 -10.28 25 10.28 25 10.28 3.78"
          />
        </g>
        <g id="arrow4">
          <polygon
            class="cls-4"
            points="-10.28 -3.78 -25 -3.78 0 25 25 -3.78 10.28 -3.78 10.28 -25 -10.28 -25 -10.28 -3.78"
          />
        </g>
        <g id="arrow5">
          <polygon
            class="cls-6"
            points="-4.6 -9.94 -15.01 -20.35 -17.68 17.68 20.35 15.01 9.94 4.6 24.95 -10.41 10.41 -24.95 -4.6 -9.94"
          />
        </g>
        <g id="arrow6">
          <polygon
            class="cls-9"
            points="4.61 9.93 15.02 20.34 17.59 -17.59 -20.34 -15.02 -9.93 -4.61 -24.86 10.32 -10.32 24.86 4.61 9.93"
          />
        </g>
        <g id="arrow7">
          <polygon
            class="cls-5"
            points="-9.93 4.61 -20.34 15.02 17.59 17.59 15.02 -20.34 4.61 -9.93 -10.32 -24.86 -24.86 -10.32 -9.93 4.61"
          />
        </g>
        <g id="arrow8">
          <polygon
            class="cls-2"
            points="9.94 -4.6 20.35 -15.01 -17.68 -17.68 -15.01 20.35 -4.6 9.94 10.41 24.95 24.95 10.41 9.94 -4.6"
          />
        </g>
      </svg>
    </div>
  );
}

export default IntroAnimation;
