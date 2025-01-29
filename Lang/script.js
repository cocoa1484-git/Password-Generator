function generatePassword() {
    const length = document.getElementById('jalength').value;
    const includeUppercase = document.getElementById('jaincludeUppercase').checked;
    const includeLowercase = document.getElementById('jaincludeLowercase').checked;
    const includeNumbers = document.getElementById('jaincludeNumbers').checked;
    const includeSymbols = document.getElementById('jaincludeSymbols').checked;

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*-_"¥|;:,.<>?';

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
    alert('copy!: ');
}
