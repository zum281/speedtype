import React, { FunctionComponent as FC, useEffect, useMemo } from "react";
import { useGameContext } from "../../context/GameContext";
import { useCountdown } from "../../hooks/useCountdown";
import { useTimer } from "../../hooks/useTimer";

const Timer: FC = () => {
	const { playing, timer } = useGameContext();
	const countDown = useCountdown();
	const active = useMemo(
		() => playing && countDown === 0,
		[playing, countDown]
	);
	useTimer(active);

	return (
		<>
			{countDown === 0 ? (
				<div>{timer} s</div>
			) : (
				<div>GetReady! {countDown}</div>
			)}
		</>
	);
};

export default Timer;
