export const timeInMinutes = (seconds: number): number => seconds / 60;

export const getGrossWpm = (minutes: number, typedChars: number): number => {
	const typedWords = typedChars / 5;
	return Math.floor(typedWords / minutes);
};

export const getNetWpm = (
	minutes: number,
	typedChars: number,
	errors: number
) => {
	return Math.floor(getGrossWpm(minutes, typedChars) - errors / minutes);
};

export const getAccuracy = (errors: number, typedChars: number) => {
	return Math.floor((1 - errors / typedChars) * 100);
};
