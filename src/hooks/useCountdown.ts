import { useState, useEffect } from "react";

export const useCountdown = (active: boolean) => {
	const [countDown, setCountDown] = useState(5);
	useEffect(() => {
		let timeout: NodeJS.Timeout | undefined = undefined;
		if (active) {
			timeout = setTimeout(() => {
				setCountDown((countDown) => countDown - 1);
			}, 1000);

			if (countDown === 0) {
				clearTimeout(timeout);
			}
		}
	}, [active, countDown]);
	return countDown;
};
