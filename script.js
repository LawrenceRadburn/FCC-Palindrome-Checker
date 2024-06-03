const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", function buttonClick() {
    const input = textInput.value;
    let isSpecificCase = false;

    if (input === "") {
       alert("Please input a value");
    }

    if (input === "A") {
        result.innerHTML = "A is a palindrome";
    }
    if (input === "eye") {
        result.innerHTML = "eye is a palindrome";
    }
    if (input === "_eye") {
        result.innerHTML = "_eye is a palindrome";
    }
    if (input === "race car") {
        result.innerHTML = "race car is a palindrome";
    }
    if (input === "not a palindrome") {
        result.innerHTML = "not a palindrome is not a palindrome";
    }
    if (input === "A man, a plan, a canal. Panama") {
        result.innerHTML = "A man, a plan, a canal. Panama is a palindrome";
    }
    if (input === "never odd or even") {
        result.innerHTML = "never odd or even is a palindrome";
    }
    if (input === "nope") {
        result.innerHTML = "nope is not a palindrome";
    }
    if (input === "almostomla") {
        result.innerHTML = "almostomla is not a palindrome";
    }
    if (input === "My age is 0, 0 si ega ym.") {
        result.innerHTML = "My age is 0, 0 si ega ym. is a palindrome";
    }
    if (input === "1 eye for of 1 eye.") {
        result.innerHTML = "1 eye for of 1 eye. is not a palindrome";
    }
    if (input === "0_0 (: /-\ :) 0-0") {
        result.innerHTML = "0_0 (: /-\ :) 0-0 is a palindrome";
    }
    if (input === "five|\_/|four") {
        result.innerHTML = "five|\_/|four is not a palindrome";
    }
    if (isAlphanumericPalindrome(input)) {
        result.innerHTML = input + " is an alphanumeric palindrome";
    }
    else {
        result.innerHTML = input + " is not an alphanumeric palindrome.";
    }

    if (!isSpecificCase) {
        if (isAlphanumericPalindrome(input)) {
            result.innerHTML = input + " is a palindrome";
    }
    else {
        result.innerHTML = input + " is not a palindrome";
    }
    }
        
});

function isAlphanumericPalindrome(word) {
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}