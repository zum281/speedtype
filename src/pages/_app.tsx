import { Layout } from "../components/Layout";
import type { AppProps } from "next/app";
import { GameProvider } from "../context/GameContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<GameProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GameProvider>
	);
};
export default MyApp;
