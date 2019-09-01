const computerChoise = variants => {
  const random = Math.floor(Math.random() * 3);
  return variants[random];
};

export default computerChoise;
