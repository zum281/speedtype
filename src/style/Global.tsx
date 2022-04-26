import { Global, css } from "@emotion/react";

export const GlobalStyles = () => {
	const styles = css`
		*,
		*::before,
		*::after {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}

		html,
		body {
			font-family: Poppins, system-ui, sans-serif;
			font-size: 16px;
			line-height: 1.6;
		}

		main {
			max-width: 50rem;
			margin: 0 auto;
			padding: 1rem;
		}

		button {
			border: none;
			margin: 0;
			padding: 0;
			width: auto;
			overflow: visible;
			background: transparent;
			color: inherit;
			font: inherit;
			line-height: normal;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			cursor: pointer;
		}

		a {
			text-decoration: none;
			color: inherit;
		}

		li {
			list-style-type: none;
		}
	`;
	return <Global styles={styles} />;
};
