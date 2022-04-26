import React, { FunctionComponent as FC, ReactNode } from "react";
import Head from "next/head";
import { VStack } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

type Props = {
	children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>SpeedType | Speed typing game</title>
				<meta
					name='description'
					content='Simple speed typing game made for fun'
				/>
			</Head>
			<Navbar />
			<VStack spacing={8} py={12}>
				{children}
			</VStack>

			<footer></footer>
		</>
	);
};

export default Layout;
