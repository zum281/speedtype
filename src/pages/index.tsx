import React, { FunctionComponent as FC, useEffect } from "react";
import { Game } from "@components/Game";
import { Timer } from "../components/Timer";
import { useGameContext } from "../context/GameContext";
import { Results } from "../components/Results";
import { Button } from "../components/ui/Button";

export const Home: FC = () => {
	const { playing, startGame } = useGameContext();

	return (
		<>
			<Timer />
			<Game />
			{!playing && <Button onClick={startGame}>Play!</Button>}
			<Results />
		</>
	);
};

export default Home;
