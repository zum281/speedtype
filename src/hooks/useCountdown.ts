import { useState, useEffect } from "react";
import { useGameContext } from "../context/GameContext";

export const useCountdown = () => {
	const { playing } = useGameContext();
	const [countDown, setCountDown] = useState(5);
	useEffect(() => {
		let timeout: NodeJS.Timeout | undefined = undefined;
		if (playing) {
			timeout = setTimeout(() => {
				setCountDown((countDown) => countDown - 1);
			}, 1000);

			if (countDown === 0) {
				clearTimeout(timeout);
			}
		}
	}, [playing, countDown]);
	return countDown;
};
