function solution(st) {
  let result = st;
  let i = 0;

  while (i <= result.length) {
    console.log(i);
    if (isPalindrome(result)) {
      return result;
    }
    result = st + st.substr(0, i).split("").reverse().join("");
    console.log(result);
    i++;
  }

  return result;
}

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  console.log("rev", reversed);
  return str === reversed;
}

console.log(solution(""));
