import { Layout } from "../components/Layout";
import type { AppProps } from "next/app";
import { GameProvider } from "../context/GameProvider";
import { GlobalStyles } from "../style/Global";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<GameProvider>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GameProvider>
	);
};
export default MyApp;
