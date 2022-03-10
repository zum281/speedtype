import React, { FunctionComponent as FC } from "react";
import { Game } from "@components/Game";
import { Timer } from "../components/Timer";
import { useGameContext } from "../context/GameContext";

export const Home: FC = () => {
	const { playing, startGame } = useGameContext();

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
