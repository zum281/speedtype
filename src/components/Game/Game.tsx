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
		timer,
		stopGame,
		chars,
		setChars,
		currentIndex,
		increaseIndex,
		decreaseIndex,
		resetIndex,
	} = useGameContext();

	const [userInput, setUserInput] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		let color = CharColor.BLACK;
		setUserInput(value);

		// check if user pressed backspace
		if (value.length < userInput.length) {
			const newChars = chars.map((char) => {
				if (char.index === currentIndex - 1) {
					char.color = color;
				}
				return char;
			});
			setChars([...newChars]);

			decreaseIndex();
		} else {
			// check if user pressed space
			if (value.charAt(value.length - 1) === " ") {
				increaseIndex();
				setUserInput("");
			}

			if (initialChars[currentIndex].value === " ") {
				setUserInput("");
			}

			value.charAt(value.length - 1) === initialChars[currentIndex].value
				? (color = CharColor.GREEN)
				: (color = CharColor.RED);

			const newChars = chars.map((char) => {
				if (char.index === currentIndex) {
					char.color = color;
				}
				return char;
			});

			setChars([...newChars]);
			increaseIndex();
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
