import { createContext, useContext, useState } from "react";

export type ContextContent = {
	playing: boolean;
	startGame: () => void;
	stopGame: () => void;
	timer: number;
	setTimer: (timer: number) => void;
};

const initialValue = {
	playing: false,
	startGame: () => {},
	stopGame: () => {},
	timer: 0,
	setTimer: (timer: number) => {},
};

export const GameContext = createContext<ContextContent>(initialValue);

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
	const [playing, setPlaying] = useState(false);
	const [timer, setTimer] = useState(0);

	const startGame = () => setPlaying(true);
	const stopGame = () => setPlaying(false);

	const value = {
		playing,
		startGame,
		stopGame,
		timer,
		setTimer,
	};

	return (
		<GameContext.Provider value={value}>{children}</GameContext.Provider>
	);
};
