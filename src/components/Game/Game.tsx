import React, {
	ChangeEvent,
	FunctionComponent as FC,
	useEffect,
	useState,
} from "react";
import { initialChars } from "@constants/game";
import { charObj } from "../../types";
import { CharColor } from "../../types/enums";
import { DisplayBox } from "@components/DisplayBox";
import { InputBox } from "@components/InputBox";

interface Props {
	playing: boolean;
	endGame: () => void;
}

const Game: FC<Props> = ({ playing, endGame }) => {
	const [chars, setChars] = useState<charObj[]>(initialChars);
	const [userInput, setUserInput] = useState("");
	const [index, setIndex] = useState(0);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		let color = CharColor.BLACK;
		setUserInput(value);

		// check if user pressed backspace
		if (value.length < userInput.length) {
			const newChars = chars.map((char) => {
				if (char.index === index - 1) {
					char.color = color;
				}
				return char;
			});
			setChars([...newChars]);

			setIndex(index - 1);
		} else {
			// check if user pressed space
			if (value.charAt(value.length - 1) === " ") {
				setIndex(index + 1);
				setUserInput("");
			}

			if (initialChars[index].value === " ") {
				setUserInput("");
			}

			value.charAt(value.length - 1) === initialChars[index].value
				? (color = CharColor.GREEN)
				: (color = CharColor.RED);

			const newChars = chars.map((char) => {
				if (char.index === index) {
					char.color = color;
				}
				return char;
			});

			setChars([...newChars]);
			setIndex(index + 1);
		}
	};

	const resetGame = () => {
		endGame();
		setIndex(0);
		setUserInput("");
		const newChars = chars.map((char) => {
			return { ...char, color: CharColor.BLACK };
		});
		setChars([...newChars]);
	};

	useEffect(() => {
		index === initialChars.length && resetGame();
	}, [index, resetGame]);

	return (
		<>
			<DisplayBox chars={chars} />
			{playing && <InputBox value={userInput} onChange={handleChange} />}
		</>
	);
};

export default Game;
