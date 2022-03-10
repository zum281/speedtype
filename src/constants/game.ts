import { CharColor } from "../types/enums";

// export const text =
// "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam, debitis temporibus neque rerum, earum saepe nostrum nemo doloremque quibusdam alias cumque iusto libero vero dicta, excepturi officiis natus totam.";

export const text = "TEST";

export const initialChars = Array.from(text).map((char, index) => {
	return {
		index: index,
		value: char,
		color: CharColor.BLACK,
	};
});
