import React, { FunctionComponent as FC } from "react";
import Head from "next/head";

const Layout: FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>SpeedType | Speed typing game</title>
				<meta
					name="description"
					content="Simple speed typing game made for fun"
				/>
			</Head>

			<main>{children}</main>

			<footer></footer>
		</>
	);
};

export default Layout;
