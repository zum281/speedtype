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
			font-family: system-ui, sans-serif;
			font-size: 16px;
			line-height: 1.6;
			background: #fafafa;
			color: #333;
		}

		body {
			max-width: 800px;
			margin: 0 auto;
			padding: clamp(0.5rem, 1rem, 1.5rem);
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
	`;
	return <Global styles={styles} />;
};
