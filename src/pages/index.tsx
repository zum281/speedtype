import React, { FunctionComponent as FC, useState } from "react";
import { Game } from "@components/Game";
import { Timer } from "../components/Timer";

export const Home: FC = () => {
	const [playing, setPlaying] = useState(false);
	const [time, setTime] = useState(0);
	const startGame = () => {
		setPlaying(true);
	};

	const endGame = () => {
		setPlaying(false);
	};
	return (
		<>
			<Timer start={playing} />
			<Game playing={playing} endGame={endGame} />
			<button onClick={startGame} disabled={playing}>
				Play!
			</button>
		</>
	);
};

export default Home;
