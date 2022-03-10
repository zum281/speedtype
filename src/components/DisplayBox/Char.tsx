import React, { FunctionComponent as FC, useMemo } from "react";
import { CharColor } from "../../types/enums";

interface Props {
	char: string;
	color: CharColor;
}

const Char: FC<Props> = ({ char, color }) => {
	const style = useMemo(() => {
		return {
			color: color,
		};
	}, [color]);

	return <span style={style}>{char}</span>;
};

export default Char;
