import React, { FunctionComponent as FC, useEffect, useState } from "react";

interface Props {
	start: boolean;
}

const Timer: FC<Props> = ({ start }) => {
	const [ms, setMS] = useState(0);
	const [countDown, setCountDown] = useState(5);

	useEffect(() => {
		let interval: NodeJS.Timer | undefined = undefined;
		if (start && countDown === 0) {
			interval = setInterval(() => {
				setMS((seconds) => seconds + 1);
			}, 1);
		} else if (!start && ms !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval!);
	}, [countDown, ms, start]);

	useEffect(() => {
		let timeout: NodeJS.Timeout | undefined = undefined;
		if (start) {
			timeout = setTimeout(() => {
				setCountDown((countDown) => countDown - 1);
			}, 1000);

			if (countDown === 0) {
				clearTimeout(timeout);
			}
		}
	}, [start, countDown]);

	return (
		<>
			{countDown === 0 ? (
				<div>{ms} ms</div>
			) : (
				<div>GetReady! {countDown}</div>
			)}
		</>
	);
};

export default Timer;
