import React, { FunctionComponent as FC, useState } from "react";
import { Game } from "@components/Game";

export const Home: FC = () => {
	const [playing, setPlaying] = useState(false);
	const startGame = () => {
		setPlaying(true);
	};

	const endGame = () => {
		setPlaying(false);
	};
	return (
		<>
			<Game playing={playing} endGame={endGame} />
			<button onClick={startGame} disabled={playing}>
				Play!
			</button>
		</>
	);
};

export default Home;
