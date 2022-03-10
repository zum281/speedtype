import React, { FunctionComponent as FC } from "react";

interface Props {
	char: string;
	color?: "green" | "red";
}

const Char: FC<Props> = ({ char, color }) => {
	const style = {
		color: color ?? "black",
	};

	return <span style={style}>{char}</span>;
};

export default Char;
