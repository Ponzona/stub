const text = (args) => {
  const { a, b } = args;
  return `File ${a} ${b}`;
};

console.log(text({ a: 1, b: '!' }));
