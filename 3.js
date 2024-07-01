function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, left + 1, right - 1);
}

function highestPalindromeHelper(str, k, left, right) {
  if (left > right) return str;

  if (str[left] !== str[right]) {
    if (k <= 0) return "-1";
    let maxChar = Math.max(str[left], str[right]);
    str =
      str.slice(0, left) +
      maxChar +
      str.slice(left + 1, right) +
      maxChar +
      str.slice(right + 1);
    return highestPalindromeHelper(str, k - 1, left + 1, right - 1);
  } else {
    return highestPalindromeHelper(str, k, left + 1, right - 1);
  }
}

function highestPalindrome(s, k) {
  if (!/^\d+$/.test(s)) return "-1";
  if (isPalindrome(s)) return s;
  let result = highestPalindromeHelper(s, k, 0, s.length - 1);
  if (result !== "-1" && !/^\d+$/.test(result)) return "-1";

  return result;
}

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("932239", 2));
console.log(highestPalindrome("0011", 1));
