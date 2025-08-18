/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
   let a=s.toLowerCase().replace(/[^a-zA-Z0-9]/gi, "");
   let b =a.split("").reverse().join("");
   return a===b;
};