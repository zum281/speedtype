import { createContext, useContext } from "react";
import { GameContextContent } from "../types";

const initialValue = {
	playing: false,
	startGame: () => {},
	stopGame: () => {},
	timer: 0,
	setTimer: (timer: number) => {},
	seconds: 0,
	errors: 0,
	addError: () => {},
	removeError: () => {},
	chars: [],
	initialChars: [],
	setChars: (chars: GameContextContent["chars"]) => {},
	backspace: () => {},
	correctAnswer: () => {},
	wrongAnswer: () => {},
	currentIndex: 0,
	increaseIndex: () => {},
	decreaseIndex: () => {},
	resetIndex: () => {},
};

export const GameContext = createContext<GameContextContent>(initialValue);

export const useGameContext = () => useContext(GameContext);
