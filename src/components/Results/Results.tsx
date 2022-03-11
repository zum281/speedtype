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
	const { chars, timer, errors } = useGameContext();
	const [grossWpm, setGrossWpm] = useState(0);
	const [netWpm, setNetWpm] = useState(0);
	const [accuracy, setAccuracy] = useState(100);

	const typedChars = useMemo(
		() => chars.filter((char) => char.color !== CharColor.BLACK),
		[chars]
	);

	useEffect(() => {
		if (typedChars.length > 0) {
			setGrossWpm(grossWPM(timeInMinutes(timer), typedChars.length));
			setNetWpm(netWPM(timeInMinutes(timer), typedChars.length, errors));
			setAccuracy(getAccuracy(errors, typedChars.length));
		}
	}, [timer, typedChars]);

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
