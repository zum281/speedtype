import React, { FunctionComponent as FC, useEffect, useState } from "react";
import { text } from "@constants/text";
import Char from "@components/DisplayBox/Char";
import { charColor, charObj } from "../types";

const c = Array.from(text);
const initialChars = c.map((char, index) => {
	return {
		index: index,
		value: char,
		color: undefined,
	};
});

export const Home: FC = () => {
	const [chars, setChars] = useState<charObj[]>(initialChars as charObj[]);

	const [userInput, setUserInput] = useState("");
	const [index, setIndex] = useState(0);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		setUserInput(value);
		let color: charColor = undefined;

		// check if user pressed backspace
		if (value.length < userInput.length) {
			color = undefined;
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

			if (text[index] === " ") {
				setUserInput("");
			}

			value.charAt(value.length - 1) === text[index]
				? (color = "green")
				: (color = "red");
			console.log(value, text[index]);
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

	useEffect(() => {
		console.log(chars[index]);
	}, [chars, index]);

	return (
		<>
			<p>
				{chars.map((char, i) => {
					return (
						<Char
							key={i}
							char={char.value}
							color={char.color ?? undefined}
						/>
					);
				})}
			</p>
			<input
				type="text"
				name="user-text"
				id="user-text"
				value={userInput}
				onChange={handleChange}
			/>
		</>
	);
};

export default Home;
