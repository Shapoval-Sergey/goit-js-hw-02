const formatString = function(string) {
  const сharacters = string.slice(0, 40);
  const longString = `${сharacters}...`;
  const result = string.length > 40 ? longString : string;
  return result;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
