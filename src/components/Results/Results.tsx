import React, { useEffect, useMemo, useState } from "react";
import { useGameContext } from "../../context/GameContext";
import { CharColor } from "../../types/enums";
import { grossWPM, timeInMinutes } from "../../utils/timeUtils";

const Results = () => {
	const { chars, timer } = useGameContext();
	const [wpm, setWpm] = useState(0);

	const typedChars = useMemo(
		() => chars.filter((char) => char.color !== CharColor.BLACK),
		[chars]
	);

	useEffect(() => {
		if (typedChars.length > 0)
			setWpm(grossWPM(timeInMinutes(timer), typedChars.length));
	}, [timer, typedChars]);

	useEffect(() => {
		console.log(typedChars);
	}, [typedChars]);
	return <p>WPM: {wpm}</p>;
};

export default Results;
