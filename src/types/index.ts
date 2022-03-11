import { CharColor } from "./enums";

export type charObj = {
	index: number;
	value: string;
	color: CharColor;
};

export type GameContextContent = {
	playing: boolean;
	startGame: () => void;
	stopGame: () => void;

	timer: number;
	setTimer: (timer: number) => void;
	seconds: number;

	errors: number;
	addError: () => void;
	removeError: () => void;

	chars: charObj[];
	setChars: (chars: charObj[]) => void;
	backspace: () => void;
	correctAnswer: () => void;
	wrongAnswer: () => void;
	currentIndex: number;
	increaseIndex: () => void;
	decreaseIndex: () => void;
	resetIndex: () => void;
};
