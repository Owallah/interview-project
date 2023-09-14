
//Palindrome check using 2 pointer method
function isPalindrome(word) {
    // First we remove non-alphanumeric characters and convert to lowercase
    const stringifiedWordToLowerCase = word.toString().toLowerCase();
  
    let left = 0; // Points to the beggining
    let right = stringifiedWordToLowerCase.length - 1; // Points to the end
  
    while (left < right) {
      if (stringifiedWordToLowerCase[left] !== stringifiedWordToLowerCase[right]) {
        return false; // We return false if characters at the ends don't match
      }
      left++; // We now move the left pointer to the right
      right--; // we now move the right pointer to the left
    }
  
    return true; // If the loop completes, then it's a palindrome
  }
  
  // Example usage:
  const inputString = '0110';
  console.log(isPalindrome(inputString));