import React, { ChangeEvent, FunctionComponent as FC } from "react";

interface Props {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: FC<Props> = ({ value, onChange }) => {
	return (
		<input
			type="text"
			name="user-text"
			id="user-text"
			value={value}
			onChange={onChange}
		/>
	);
};

export default InputBox;
