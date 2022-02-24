



var newString = ""
palindrome = true
function reverseString(str) {

    for (i = str.length - 1; i >= 0; i--) {
        newString += str[i];

        if (newString == str) {
            return palindrome
        }


    }
    return false
}
var a = reverseString('Madam')

console.log(a)