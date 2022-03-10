import React, { FunctionComponent as FC, useEffect } from "react";
import { Game } from "@components/Game";
import { Timer } from "../components/Timer";
import { useGameContext } from "../context/GameContext";

export const Home: FC = () => {
	const { playing, startGame, timer } = useGameContext();

	useEffect(() => {
		if (!playing) console.log(timer);
	}, [playing, timer]);

	return (
		<>
			<Timer />
			<Game />
			<button onClick={startGame} disabled={playing}>
				Play!
			</button>
		</>
	);
};

export default Home;
