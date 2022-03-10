import React, {
	ChangeEvent,
	FunctionComponent as FC,
	useEffect,
	useState,
} from "react";
import { CharColor } from "../../types/enums";
import { DisplayBox } from "@components/DisplayBox";
import { InputBox } from "@components/InputBox";
import { useGameContext } from "../../context/GameContext";
import { initialChars } from "../../constants/game";

const Game: FC = () => {
	const {
		playing,
		stopGame,
		chars,
		correctAnswer,
		wrongAnswer,
		backspace,
		currentIndex,
		increaseIndex,
	} = useGameContext();

	const [userInput, setUserInput] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		setUserInput(value);

		if (value.length < userInput.length) backspace();
		else {
			// check if user pressed space
			if (value.charAt(value.length - 1) === " ") {
				increaseIndex();
				setUserInput("");
			}

			if (initialChars[currentIndex].value === " ") {
				setUserInput("");
			}

			value.charAt(value.length - 1) === initialChars[currentIndex].value
				? correctAnswer()
				: wrongAnswer();
		}
	};

	useEffect(() => {
		currentIndex === initialChars.length && stopGame();
	}, [currentIndex, stopGame]);

	return (
		<>
			<DisplayBox chars={chars} />
			{playing && <InputBox value={userInput} onChange={handleChange} />}
		</>
	);
};

export default Game;
