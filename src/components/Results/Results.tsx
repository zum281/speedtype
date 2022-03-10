import React, { useEffect, useMemo } from "react";
import { useGameContext } from "../../context/GameContext";
import { CharColor } from "../../types/enums";
import { timeInMinutes } from "../../utils/timeUtils";

const Results = () => {
	const { chars, timer } = useGameContext();

	const typedChars = useMemo(
		() => chars.filter((char) => char.color !== CharColor.BLACK),
		[chars]
	);

	const typedWords = useMemo(() => typedChars.length / 5, [chars]);

	const GrossWPM = useMemo(() => {
		const time = timeInMinutes(timer);
		console.table({ timer, time });
		if (time > 0) {
			return typedWords / time;
		} else return 0;
	}, [typedWords, timer]);

	useEffect(() => {
		console.log(typedChars);
	}, [typedChars]);
	return <p>WPM: {GrossWPM}</p>;
};

export default Results;
