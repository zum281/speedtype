export const timeInMinutes = (seconds: number): number => seconds / 60;

export const grossWPM = (minutes: number, typedChars: number): number => {
	const typedWords = typedChars / 5;
	return Math.floor(typedWords / minutes);
};
