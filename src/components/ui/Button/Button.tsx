import React, {
	ButtonHTMLAttributes,
	FunctionComponent as FC,
	ReactNode,
} from "react";

import styled from "@emotion/styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Btn = styled.button``;

export const Button: FC<Props> = ({ children, ...props }) => {
	return <Btn {...props}>{children}</Btn>;
};
