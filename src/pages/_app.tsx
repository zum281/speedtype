import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { GameProvider } from "../context/GameProvider";
import { GlobalStyles } from "../style/Global";
import { theme } from "../style/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={theme}>
			<GameProvider>
				<GlobalStyles />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</GameProvider>
		</ChakraProvider>
	);
};
export default MyApp;
