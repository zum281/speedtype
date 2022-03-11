export const timeInMinutes = (seconds: number): number => seconds / 60;

export const grossWPM = (minutes: number, typedChars: number): number => {
	const typedWords = typedChars / 5;
	return Math.floor(typedWords / minutes);
};

export const netWPM = (minutes: number, typedChars: number, errors: number) => {
	return grossWPM(minutes, typedChars) - errors / minutes;
};

export const getAccuracy = (errors: number, typedChars: number) => {
	return (1 - errors / typedChars) * 100;
};
