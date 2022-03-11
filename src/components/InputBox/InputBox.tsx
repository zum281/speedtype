import React, { ChangeEvent, FunctionComponent as FC, useRef } from "react";
import { useGameContext } from "../../context/GameContext";

interface Props {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: FC<Props> = ({ value, onChange }) => {
	const { timer } = useGameContext();
	const ref = useRef<HTMLInputElement>(null);

	if (timer > 0) {
		ref.current?.focus();
	}

	return (
		<input
			type="text"
			name="user-text"
			id="user-text"
			value={value}
			onChange={onChange}
			disabled={timer === 0}
			ref={ref}
		/>
	);
};

export default InputBox;
