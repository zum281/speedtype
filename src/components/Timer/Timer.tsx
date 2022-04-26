import React, { FunctionComponent as FC, useMemo } from "react";
import { Text } from "@chakra-ui/react";
import { useGameContext } from "../../context/GameContext";
import { useCountdown } from "../../hooks/useCountdown";
import { useTimer } from "../../hooks/useTimer";

const Timer: FC = () => {
	const { playing, seconds } = useGameContext();
	const countDown = useCountdown();
	const active = useMemo(
		() => playing && countDown === 0,
		[playing, countDown]
	);
	useTimer(active);

	return (
		<>
			{countDown === 0 && (
				<Text fontSize='3xl' as='output'>
					{Math.floor(seconds)} s
				</Text>
			)}
			{countDown !== 0 && (
				<Text fontSize='3xl' as='output'>
					Get Ready! {countDown}
				</Text>
			)}
		</>
	);
};

export default Timer;
