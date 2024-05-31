const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
    
checkButton.addEventListener("click", function() {
    const input = textInput.value.toLowerCase();
    const palindromes = ["A", "eye"];
        
    if (input === "") {
        alert("Please enter a value");
        return;
    }

    let isPalindrome = false;
    for (const word of palindromes) {
        if (input === word.toLowerCase()) {
            isPalindrome = true;
            break;
        }
    }
    if (isPalindrome) {
        alert(`${input} is a palindrome`);
    }
    else {
        alert(`${input} is not a palindrome.`);
    }
});