import React, { FunctionComponent as FC, useEffect } from "react";
import { Game } from "@components/Game";
import { Timer } from "../components/Timer";
import { useGameContext } from "../context/GameContext";
import { Results } from "../components/Results";

export const Home: FC = () => {
	const { playing, startGame } = useGameContext();

	return (
		<>
			<Timer />
			<Game />
			{!playing && <button onClick={startGame}>Play!</button>}
			<Results />
		</>
	);
};

export default Home;
