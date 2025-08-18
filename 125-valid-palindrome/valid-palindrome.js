/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
   let a=s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
   let b =a.split("").reverse().join("");
   return a===b;
};