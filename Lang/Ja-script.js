function generatePassword() {
    const length = document.getElementById('jalength').value;
    const includeUppercase = document.getElementById('jaincludeUppercase').checked;
    const includeLowercase = document.getElementById('jaincludeLowercase').checked;
    const includeNumbers = document.getElementById('jaincludeNumbers').checked;
    const includeSymbols = document.getElementById('jaincludeSymbols').checked;

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    if (includeUppercase) characters += uppercaseLetters;
    if (includeLowercase) characters += lowercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(passwordField.value);
    alert('%E3%83%91%E3%82%B9%E3%83%AF%E3%83%BC%E3%83%89%E3%82%92%E3%82%B3%E3%83%94%E3%83%BC%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82: ' + passwordField.value);
}
