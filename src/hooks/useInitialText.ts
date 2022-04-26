import { useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { charObj } from "../types";
import { CharColor } from "../types/enums";

export const useInitialText = (
	refetch: boolean,
	setRefresh: (val: boolean) => void
) => {
	const [initialText, setInitialText] = useState("");
	const [initialChars, setInitialChars] = useState<charObj[]>([]);
	const { colorMode } = useColorMode();

	useEffect(() => {
		if (refetch) {
			fetch("http://metaphorpsum.com/paragraphs/1")
				.then((res) => res.text())
				.then((data) => {
					console.log(data);
					setInitialText(data);
					const chars = Array.from(data).map((char, index) => {
						return {
							index: index,
							value: char,
							color:
								colorMode === "light"
									? CharColor.BLACK
									: CharColor.WHITE,
						};
					});
					setInitialChars([...chars]);
					setRefresh(false);
				})
				.catch((err) => console.log(err));
		}
	}, [refetch]);

	return { initialText, initialChars };
};
