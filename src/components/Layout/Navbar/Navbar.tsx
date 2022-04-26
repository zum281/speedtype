import React, { FunctionComponent as FC } from "react";
import NextLink from "next/link";
import {
	Box,
	Button,
	Flex,
	Link,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useGameContext } from "../../../context/GameContext";
const Navbar: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { stopGame } = useGameContext();
	return (
		<Box bg={useColorModeValue("gray.100", "gray.900")}>
			<Flex
				alignItems='center'
				justifyContent='space-between'
				maxW='50rem'
				mx='auto'
				px='1rem'
				py={4}>
				<nav>
					<ul>
						<li>
							<NextLink href='/' passHref>
								<Link onClick={stopGame}>New Game</Link>
							</NextLink>
						</li>
					</ul>
				</nav>
				<Button onClick={toggleColorMode}>
					{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				</Button>
			</Flex>
		</Box>
	);
};

export default Navbar;
