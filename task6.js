// Palindrome word

function pal(word){
    let reverseWord=word.toLowerCase().split("").reverse().join("");

    word===reverseWord?
    console.log(true):
    console.log(false)

}
pal('PalindrOme');
pal("mokokom");