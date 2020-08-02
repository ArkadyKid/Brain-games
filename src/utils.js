export default (minNumber, maxNumber) => {
  const diff = maxNumber - minNumber;
  const randomDiffNumber = Math.round(Math.random() * diff);
  return minNumber + randomDiffNumber;
};
