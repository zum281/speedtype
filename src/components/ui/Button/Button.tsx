import React, {
	ButtonHTMLAttributes,
	FunctionComponent as FC,
	ReactNode,
} from "react";

import styled from "@emotion/styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Btn = styled.button`
	border: 1px solid orange;
	border-radius: 2px;
	padding: 0.5rem 1rem;
	min-width: 120px;
	background: orange;
	color: white;
	font-size: 1.2rem;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 1px;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: #ffc107;
		border-color: #ffc107;
	}
`;

export const Button: FC<Props> = ({ children, ...props }) => {
	return <Btn {...props}>{children}</Btn>;
};
