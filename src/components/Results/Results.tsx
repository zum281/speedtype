import React, { useMemo } from "react";
import { useGameContext } from "../../context/GameContext";

const Results = () => {
	const { chars, timer } = useGameContext();

	const GrossWPM = useMemo(() => {
		if (timer > 0) {
			const timeInMinutes = timer / 1000 / 60;
			return chars.length / 5 / timeInMinutes;
		} else return 0;
	}, [chars, timer]);
	return <p>WPM: {GrossWPM}</p>;
};

export default Results;
