import React from "react";
import { Button } from "@chakra-ui/react";
import { Game } from "@components/Game";
import { Timer } from "../components/Timer";
import { useGameContext } from "../context/GameContext";
import { Results } from "../components/Results";

export const Home = () => {
	const { playing, startGame } = useGameContext();

	return (
		<>
			<Timer />
			<Game />
			{!playing && (
				<Button size='lg' onClick={startGame} colorScheme={"pink"}>
					Play!
				</Button>
			)}
			<Results />
		</>
	);
};

export default Home;
