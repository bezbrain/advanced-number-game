export const randomNum = (exclude: number): number => {
  const random = Math.floor(Math.random() * (100 - 1)) + 1;

  if (random === exclude) {
    return randomNum(exclude); // Using recursion. That is, when random number is equal to the excluded number (which is the first initial number chosen by the player), we want to keep regenerating the random number. Note that we have to keep generating a number if random equals exclude because at the initial number selection, we don't want the initial number to be the correct number
  }
  return random;
};
