export const minRange = 1;

export const maxRange = 7;

export const moodPercentage = mood => (mood - minRange) / (maxRange - minRange);
