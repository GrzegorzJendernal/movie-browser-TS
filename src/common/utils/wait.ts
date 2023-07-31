const delayTime = 1000;

export const wait = () => new Promise((resolve) => setTimeout(resolve, delayTime));
