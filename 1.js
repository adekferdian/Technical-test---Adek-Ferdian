function calculateWeights(s) {
  const weights = new Set();
  const n = s.length;

  for (let i = 0; i < n; i++) {
    let weight = 0;
    for (let j = i; j < n; j++) {
      weight += s.charCodeAt(j) - "a".charCodeAt(0) + 1;
      weights.add(weight);
    }
  }

  return weights;
}

function queryWeights(string, queries) {
  const weights = calculateWeights(string);
  const results = queries.map((query) => (weights.has(query) ? "Yes" : "No"));
  return results;
}

const string1 = "abbcccd";
const queries = [1, 3, 9, 8];
const string2 = "abbcccd";
const queries2 = [1, 3, 5, 7];
const string3 = "abbcccd";
const queries3 = [1, 3, 4, 9];
const result1 = queryWeights(string1, queries1);
const result2 = queryWeights(string2, queries2);
const result3 = queryWeights(string3, queries3);
console.log(result1, result2, result3);
