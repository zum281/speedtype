import { useEffect } from "react";
import { useGameContext } from "../context/GameContext";

export const useTimer = (active: boolean) => {
	const { timer, setTimer } = useGameContext();

	useEffect(() => {
		let interval: NodeJS.Timer | undefined = undefined;
		if (active) {
			interval = setInterval(() => {
				setTimer(timer + 1);
			}, 1);
		} else if (!active && timer !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval!);
	}, [timer, active]);
};
