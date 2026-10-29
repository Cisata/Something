import { useState } from 'react';
import './App.css';


function Flower({ x, y, color, center = '#F5C85B', petals = 6 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {Array.from({ length: petals }, (_, i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-10"
          rx="5"
          ry="9"
          fill={color}
          transform={`rotate(${i * (360 / petals)})`}
        />
      ))}

      <circle cx="0" cy="0" r="5" fill={center} />
    </g>
  );
}

function App() {
  const [stage, setStage] = useState(0);

  // Personalize these two values later.
  const recipientName = 'Ayinla';
const personalMessage = "Let's play MLBB again soon! I am sorry!";

  function revealSurprise() {
    setStage((currentStage) =>
      currentStage < 4 ? currentStage + 1 : currentStage
    );
  }
  function replaySurprise(event) {
    event.stopPropagation();
    setStage(0);
  }

  return (
    <main
      className={`surprise-screen stage-${stage}`}
      onClick={revealSurprise}
    >
      {stage >= 2 && (
        <div className="floating-decorations" aria-hidden="true">
          <span>♡</span>
          <span>🌸</span>
          <span>✦</span>
          <span>🌼</span>
          <span>♡</span>
          <span>🌷</span>
          <span>✧</span>
          <span>🌸</span>
        </div>
      )}
      {stage === 0 && (
        <p className="hint">click anywhere (¬‿¬) but do not spam click ♡</p>
      )}

      {stage === 1 && (
        <h1 className="greeting">A little surprise for you 😁 ♡</h1>
      )}

      {stage >= 2 && (
        <section className="gift">
          <div className="teddy" aria-label="Cute teddy bear">
            <div className="ear ear-left" />
            <div className="ear ear-right" />

            <div className="bear-head">
              <div className="eye eye-left" />
              <div className="eye eye-right" />
              <div className="muzzle">
                <div className="nose" />
                <div className="mouth" />
              </div>
              <div className="blush blush-left" />
              <div className="blush blush-right" />
            </div>

            <div className="bear-body">
              <div className="belly" />
            </div>

            <div className="arm arm-left" />
            <div className="arm arm-right" />
            <div className="bow">
              <span />
            </div>
          </div>


          {stage >= 3 && (
            <div className="bouquet">
              <svg
                className="bouquet-art"
                viewBox="0 0 240 230"
                role="img"
                aria-label="A pastel bouquet of pink and white flowers"
              >
                {/* Flower stems */}
                <g
                  fill="none"
                  stroke="#78946B"
                  strokeWidth="4"
                  strokeLinecap="round"
                >
                  <path d="M120 145 Q95 100 65 55" />
                  <path d="M120 145 Q120 95 120 45" />
                  <path d="M120 145 Q145 100 175 60" />
                  <path d="M120 145 Q85 115 85 80" />
                  <path d="M120 145 Q155 115 155 85" />
                </g>

                {/* Leaves */}
                <g fill="#91AD80">
                  <ellipse cx="85" cy="105" rx="17" ry="7"
                    transform="rotate(35 85 105)" />
                  <ellipse cx="148" cy="111" rx="17" ry="7"
                    transform="rotate(-35 148 111)" />
                  <ellipse cx="99" cy="125" rx="15" ry="6"
                    transform="rotate(25 99 125)" />
                  <ellipse cx="140" cy="130" rx="15" ry="6"
                    transform="rotate(-25 140 130)" />
                </g>

                {/* Flowers */}
                <Flower x={65} y={55} color="#F4A0B5" petals={7} />
                <Flower x={120} y={45} color="#FFFFFF" petals={8} />
                <Flower x={175} y={60} color="#F7B4C4" petals={7} />
                <Flower x={85} y={80} color="#FFFFFF" petals={8} />
                <Flower x={155} y={85} color="#F5A6BB" petals={7} />
                <Flower x={48} y={83} color="#F9D7DE" center="#EBA6B6" petals={5} />
                <Flower x={102} y={58} color="#FFFDF5" center="#F4CF69" petals={5} />
                <Flower x={193} y={88} color="#F9D7DE" center="#EBA6B6" petals={5} />
                <Flower x={145} y={66} color="#FFFDF5" center="#F4CF69" petals={5} />

                {/* Tiny filler blossoms */}
                <g fill="#FFFDF5" stroke="#E9B7C4" strokeWidth="0.8">
                  <circle cx="75" cy="66" r="3" />
                  <circle cx="80" cy="61" r="3" />
                  <circle cx="85" cy="66" r="3" />
                  <circle cx="80" cy="71" r="3" />
                  <circle cx="80" cy="66" r="2" fill="#F4CF69" />

                  <circle cx="165" cy="48" r="3" />
                  <circle cx="170" cy="43" r="3" />
                  <circle cx="175" cy="48" r="3" />
                  <circle cx="170" cy="53" r="3" />
                  <circle cx="170" cy="48" r="2" fill="#F4CF69" />
                </g>


                {/* Wrapping paper */}
                <path
                  d="M65 112 L120 145 L175 112 L157 192 L120 216 L83 192 Z"
                  fill="#F7D1D0"
                  stroke="#E9A9AE"
                  strokeWidth="2"
                />

                {/* Ribbon */}
                <path
                  d="M120 164 C92 137 80 163 113 174
           L120 164 L127 174
           C160 163 148 137 120 164 Z"
                  fill="#EA8FA8"
                />

                <circle cx="120" cy="165" r="7" fill="#D97491" />
              </svg>
            </div>
          )}


          {stage >= 4 && (
            <div key={stage} className="love-note">
              <p className="eyebrow">a little gift for</p>
              <h1>{recipientName} ♡</h1>
              <p>{personalMessage}</p>
              <div className="tiny-hearts">♡ ♥ ♡</div>
            </div>
          )}
        </section>
      )}

      {stage < 4 && (
        <p className="next-hint">
          {stage === 0
            ? ''
            : stage === 1
              ? 'Someone has a gift for you (¬‿¬) ♡'
              : stage === 2
                ? 'Look what I brought you! (☞ﾟヮﾟ)☞🌷'
                : 'One little message more... (ˉ﹃ˉ)'}
        </p>
      )}


      {stage === 4 && (
        <div className="ending">
          <p className="restart-hint">
            ༼ つ ◕_◕ ༽つ♡
          </p>

          <button
            className="replay-button"
            onClick={replaySurprise}
          >
            ↻ Replay the surprise
          </button>
        </div>
      )}

    </main>
  );
}

export default App;