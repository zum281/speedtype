import { useState } from "react";
import { GameContext } from "./GameContext";
import { initialChars } from "@constants/game";
import { CharColor } from "../types/enums";

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
	const [playing, setPlaying] = useState(false);
	const [timer, setTimer] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [chars, setChars] = useState([...initialChars]);

	const startGame = () => setPlaying(true);
	const stopGame = () => {
		setPlaying(false);
		setTimer(0);
		setCurrentIndex(0);
		const newChars = chars.map((char) => {
			return { ...char, color: CharColor.BLACK };
		});
		setChars([...newChars]);
	};

	const increaseIndex = () => setCurrentIndex(currentIndex + 1);
	const decreaseIndex = () => setCurrentIndex(currentIndex - 1);
	const resetIndex = () => setCurrentIndex(0);

	const value = {
		playing,
		startGame,
		stopGame,
		timer,
		setTimer,
		chars,
		setChars,
		currentIndex,
		increaseIndex,
		decreaseIndex,
		resetIndex,
	};

	return (
		<GameContext.Provider value={value}>{children}</GameContext.Provider>
	);
};
