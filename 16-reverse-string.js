const reverseString = str => {
  let result = [];
  let last = str.length - 1;
  for (let i = 0; i < Math.ceil (str.length / 2); i++) {
    result[i] = str[last - i];
    result[last - i] = str[i];
  }

  return result.join ('');
};

console.log (reverseString ("Madam, I'm Adam"));
// note the O(N/2) complexity => O(N)
