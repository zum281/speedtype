import React, { FunctionComponent as FC } from "react";
import { charObj } from "../../types";

import Char from "./Char";

interface Props {
	chars: charObj[];
}

const DisplayBox: FC<Props> = ({ chars }) => {
	return (
		<p>
			{chars.map((char, i) => {
				return <Char key={i} char={char.value} color={char.color} />;
			})}
		</p>
	);
};

export default DisplayBox;
