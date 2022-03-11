import { useEffect, useMemo, useState } from "react";
import { useGameContext } from "../context/GameContext";
import { CharColor } from "../types/enums";
import {
	getAccuracy,
	getGrossWpm,
	getNetWpm,
	timeInMinutes,
} from "../utils/timeUtils";

export const useResults = () => {
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
			setGrossWpm(getGrossWpm(timeInMinutes(seconds), typedChars.length));
			setNetWpm(
				getNetWpm(timeInMinutes(seconds), typedChars.length, errors)
			);
			setAccuracy(getAccuracy(errors, typedChars.length));
		}
	}, [seconds, typedChars]);

	return { grossWpm, netWpm, accuracy };
};
