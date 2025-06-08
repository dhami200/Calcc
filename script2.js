document.addEventListener("keydown", (e) => {
    const validKeys = /[0-9+\-*/.%=]|Enter|Backspace/;
    if (!validKeys.test(e.key)) return;

    if (e.key === 'Enter') {
        try {
            string = eval(string);
            document.querySelector('input').value = string;
        } catch {
            document.querySelector('input').value = "Error";
            string = "";
        }
    } else if (e.key === 'Backspace') {
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
    } else {
        string += e.key;
        document.querySelector('input').value = string;
    }
});

if (e.target.innerHTML === '=') {
    try {
        string = eval(string);
        document.querySelector('input').value = string;

        // Add class to body to change background
        document.body.classList.add('answer-shown');

        // Optional: revert back after 3 seconds
        setTimeout(() => {
            document.body.classList.remove('answer-shown');
        }, 3000);

    } catch {
        document.querySelector('input').value = "Error";
        string = "";
        // Remove class if error
        document.body.classList.remove('answer-shown');
    }
}
if (e.target.innerHTML === '=') {
    try {
        string = eval(string);
        document.querySelector('input').value = string;

        // Add class to body to change background
        document.body.classList.add('answer-shown');

        // Optional: revert back after 3 seconds
        setTimeout(() => {
            document.body.classList.remove('answer-shown');
        }, 3000);

    } catch {
        document.querySelector('input').value = "Error";
        string = "";
        // Remove class if error
        document.body.classList.remove('answer-shown');
    }
}
if (e.key === 'Enter') {
    try {
        string = eval(string);
        document.querySelector('input').value = string;
        document.body.classList.add('answer-shown');
        setTimeout(() => {
            document.body.classList.remove('answer-shown');
        }, 3000);
    } catch {
        document.querySelector('input').value = "Error";
        string = "";
        document.body.classList.remove('answer-shown');
    }
}
