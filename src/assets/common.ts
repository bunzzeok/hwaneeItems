const setNewId = () => {
  const randomNumber = Math.random() * 10000;
  return new Date().getTime() + randomNumber;
};

export { setNewId };
