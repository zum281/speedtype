import React, { FunctionComponent as FC, useMemo } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import { useTimer } from "../../hooks/useTimer";

interface Props {
	start: boolean;
}

const Timer: FC<Props> = ({ start }) => {
	const countDown = useCountdown(start);
	const active = useMemo(() => start && countDown === 0, [start, countDown]);
	const ms = useTimer(active);

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
