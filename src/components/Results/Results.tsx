import React, { useEffect, useMemo, useState } from "react";
import { useGameContext } from "../../context/GameContext";
import { CharColor } from "../../types/enums";
import {
	getAccuracy,
	grossWPM,
	netWPM,
	timeInMinutes,
} from "../../utils/timeUtils";

const Results = () => {
	const { chars, seconds, errors } = useGameContext();
	const [grossWpm, setGrossWpm] = useState(0);
	const [netWpm, setNetWpm] = useState(0);
	const [accuracy, setAccuracy] = useState(100);

	const typedChars = useMemo(
		() => chars.filter((char) => char.color !== CharColor.BLACK),
		[chars]
	);

	useEffect(() => {
		if (typedChars.length > 0) {
			setGrossWpm(grossWPM(timeInMinutes(seconds), typedChars.length));
			setNetWpm(
				netWPM(timeInMinutes(seconds), typedChars.length, errors)
			);
			setAccuracy(getAccuracy(errors, typedChars.length));
		}
	}, [seconds, typedChars]);

	return (
		<div>
			<p>Gross WPM: {grossWpm}</p>
			<p>
				Net WPM: {netWpm} (Accuracy: {accuracy}%)
			</p>
		</div>
	);
};

export default Results;
