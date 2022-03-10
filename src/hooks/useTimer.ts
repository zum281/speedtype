import { useState, useEffect } from "react";

export const useTimer = (active: boolean) => {
	const [ms, setMS] = useState(0);

	useEffect(() => {
		let interval: NodeJS.Timer | undefined = undefined;
		if (active) {
			interval = setInterval(() => {
				setMS((seconds) => seconds + 1);
			}, 1);
		} else if (!active && ms !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval!);
	}, [ms, active]);

	return ms;
};
