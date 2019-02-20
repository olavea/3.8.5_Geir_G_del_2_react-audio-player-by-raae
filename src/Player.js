import React, { useRef, useState } from "react";
import { INITIAL, PLAYING, PAUSED, ENDED } from "./enums";

import ToggleIcon from "./ToggleIcon";

const Player = ({ audioFile }) => {
  const audioEl = useRef(null);

  const [status, setStatus] = useState(INITIAL);
  const [speed, setSpeed] = useState(1);

  const onToggleClick = () => {
    const audio = audioEl.current;
    audio.paused ? audio.play() : audio.pause();
  };

  const onSpeedClick = () => {
    const audio = audioEl.current;
    switch (audio.playbackRate) {
      case 1:
        audio.playbackRate = 1.2;
        break;
      case 1.2:
        audio.playbackRate = 1.5;
        break;
      case 1.5:
        audio.playbackRate = 2;
        break;
      default:
        audio.playbackRate = 1;
    }
  };

  return (
    <div className="Player">
      <audio
        onPlaying={() => setStatus(PLAYING)}
        onPause={() => setStatus(PAUSED)}
        onEnded={() => setStatus(ENDED)}
        onRateChange={e => setSpeed(e.currentTarget.playbackRate)}
        ref={audioEl}
        src={audioFile}
      />
      <button onClick={onToggleClick} className="toggle">
        <ToggleIcon status={status} />
      </button>
      <button onClick={onSpeedClick} className="speed">
        {speed}x
      </button>
    </div>
  );
};

export default Player;
