export default (minNumber, maxNumber) => {
  const diff = maxNumber - minNumber;
  const randomDiffNumber = Math.floor(Math.random() * diff);
  return minNumber + randomDiffNumber;
};
