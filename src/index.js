import React from "react";
import ReactDOM from "react-dom";
import Player from "./Player";
import soundfile from "./assets/lille-my.mp3";

import "./styles.css";

const App = () => <Player audioFile={soundfile} />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
