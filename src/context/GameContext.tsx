import { createContext, useContext } from "react";
import { GameContextContent } from "../types";

const initialValue = {
	playing: false,
	startGame: () => {},
	stopGame: () => {},
	timer: 0,
	setTimer: (timer: number) => {},

	chars: [],
	setChars: (chars: GameContextContent["chars"]) => {},
	currentIndex: 0,
	increaseIndex: () => {},
	decreaseIndex: () => {},
	resetIndex: () => {},
};

export const GameContext = createContext<GameContextContent>(initialValue);

export const useGameContext = () => useContext(GameContext);
