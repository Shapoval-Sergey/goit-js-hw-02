const checkForSpam = function(message) {
  const lowMessage = message.toLowerCase();
  const result = lowMessage.includes('sale') || lowMessage.includes('spam');
  return result;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
