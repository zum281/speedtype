import React, {
	ChangeEvent,
	FunctionComponent as FC,
	useEffect,
	useState,
} from "react";
import { DisplayBox } from "@components/DisplayBox";
import { InputBox } from "@components/InputBox";
import { useGameContext } from "../../context/GameContext";
import { Container, VStack } from "@chakra-ui/react";

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
		initialChars,
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
		if (initialChars.length > 0 && currentIndex === initialChars.length) {
			stopGame();
			setUserInput("");
		}
	}, [currentIndex, stopGame]);

	return (
		<Container>
			<VStack spacing={4}>
				<DisplayBox chars={chars} />
				{playing && (
					<InputBox value={userInput} onChange={handleChange} />
				)}
			</VStack>
		</Container>
	);
};

export default Game;
