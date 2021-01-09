// convert kebab and snakecase to camelCase
function toCamelCase(str) {
  return str.replace(/(-|_)[a-z]/gi, match => {
    return match[1].toUpperCase();
  });
}

// console.log(toCamelCase("the_stealth_warrior"));

// return all words in array that could be autocomplete terms for the provided term
function autocomplete(input, dictionary) {
  const cleanInput = input.replace(/[^a-z]/gi, "");
//   const cleanInput = input.replace(/\W|_|\d/g, "");
  const regex = RegExp(`\^${cleanInput}`, "i");
  return dictionary.reduce((autoTerms, dictTerm) => {
    if (regex.test(dictTerm) && autoTerms.length < 5) {
      autoTerms.push(dictTerm);
      return autoTerms;
    }
    return autoTerms;
  }, []);
}

console.log(autocomplete("ai", ["airplane", "airport", "apple", "ball"]));
