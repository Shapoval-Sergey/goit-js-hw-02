const findLongestWord = function(string) {
  const arrString = string.split(' ');
  let biggerWord = arrString[0];

  //   eslint-disable-next-line
  for (let word of arrString) {
    if (word.length > biggerWord.length) {
      biggerWord = word;
    }
  }
  return biggerWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
