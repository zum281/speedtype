import React, { FunctionComponent as FC } from "react";
import { useResults } from "../../hooks/useResults";

const Results: FC = () => {
	const { grossWpm, netWpm, accuracy } = useResults();
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
