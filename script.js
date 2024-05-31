    const checkButton = document.getElementById("check-btn");
    const textInput = document.getElementById("text-input");
    
    checkButton.addEventListener("click", function emptyInputBox() {
        if (textInput.value === "") {
            alert("Please input a value");
        }
    });
