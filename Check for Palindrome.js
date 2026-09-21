function isPalindrome(word) {
    return word === word.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   
console.log(isPalindrome("madam"));    
console.log(isPalindrome("step on no pets"));
