import { useState } from "react";
import { GameContext } from "./GameContext";
import { initialChars } from "@constants/game";
import { CharColor } from "../types/enums";

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
	const [playing, setPlaying] = useState(false);
	const [timer, setTimer] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [chars, setChars] = useState([...initialChars]);

	const startGame = () => {
		setTimer(0);
		setPlaying(true);
	};
	const stopGame = () => {
		setPlaying(false);
		setCurrentIndex(0);
		const newChars = chars.map((char) => {
			return { ...char, color: CharColor.BLACK };
		});
		setChars([...newChars]);
	};

	const increaseIndex = () => setCurrentIndex(currentIndex + 1);
	const decreaseIndex = () => setCurrentIndex(currentIndex - 1);
	const resetIndex = () => setCurrentIndex(0);

	const backspace = () => {
		const newChars = chars.map((char) => {
			if (char.index === currentIndex - 1) {
				char.color = CharColor.BLACK;
			}
			return char;
		});
		setChars([...newChars]);
		decreaseIndex();
	};

	const correctAnswer = () => {
		const newChars = chars.map((char) => {
			if (char.index === currentIndex) {
				char.color = CharColor.GREEN;
			}
			return char;
		});

		setChars([...newChars]);
		increaseIndex();
	};

	const wrongAnswer = () => {
		const newChars = chars.map((char) => {
			if (char.index === currentIndex) {
				char.color = CharColor.RED;
			}
			return char;
		});

		setChars([...newChars]);
		increaseIndex();
	};

	const value = {
		playing,
		startGame,
		stopGame,
		timer,
		setTimer,
		chars,
		correctAnswer,
		wrongAnswer,
		setChars,
		backspace,
		currentIndex,
		increaseIndex,
		decreaseIndex,
		resetIndex,
	};

	return (
		<GameContext.Provider value={value}>{children}</GameContext.Provider>
	);
};
