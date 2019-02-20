import React from "react";
import { INITIAL, PLAYING, PAUSED } from "./enums";
import { ReactComponent as PlayingIcon } from "./assets/icons8-pause.svg";
import { ReactComponent as PausedIcon } from "./assets/icons8-resume-button.svg";
import { ReactComponent as InitialIcon } from "./assets/icons8-play.svg";

const ToggleIcon = ({ status }) => {
  switch (status) {
    case INITIAL:
      return <InitialIcon className="ToggleIcon initial" />;
    case PLAYING:
      return <PlayingIcon className="ToggleIcon playing" />;
    case PAUSED:
      return <PausedIcon className="ToggleIcon paused" />;
    default:
      return <InitialIcon className="ToggleIcon initial" />;
  }
};

export default ToggleIcon;
