import React, { FunctionComponent as FC } from "react";
import { text } from "@constants/text";
import Char from "./Char";

const chars = Array.from(text);

const DisplayBox: FC = () => {
	return (
		<p>
			{chars.map((char, i) => {
				return <Char key={i} char={char} />;
			})}
		</p>
	);
};

export default DisplayBox;
