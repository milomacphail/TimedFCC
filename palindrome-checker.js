function palindrome(str) {
    var regEx = /[\\W_]/g;
    var lower = str.toLowerCase().replace(regEx, '');
    var reverseString = lower.split('').reverse().join('');
    return lower === reverseString;
}