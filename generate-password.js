function generatePassword(length, string, num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
    const all = alphabet + digits + symbols
    const pass2 = digits + alphabet
    let newPassword = '';
    let newPassword2 = [];
    if (string === 'easy') {
        if (typeof num === 'number') {
            for (let i = 0; i < num; i++) {
                for (let z = 0; z < length; z++) {
                    newPassword += alphabet[Math.floor(Math.random() * alphabet.length)];
                }
                if (newPassword2.indexOf(newPassword) !== -1) {
                    i--
                } else {
                    newPassword2.push(newPassword)
                    newPassword = ''
                }
            }
            return newPassword2
        } else {
            for (let i = 0; i < length; i++) {
                newPassword += alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    } else if (string === 'medium') {
        if (typeof num === 'number') {
            for (let i = 0; i < num; i++) {
                for (let z = 0; z < length; z++) {
                    newPassword += pass2[Math.floor(Math.random() * pass2.length)];
                }
                if (newPassword2.indexOf(newPassword) !== -1) {
                    i--
                } else {
                    newPassword2.push(newPassword)
                    newPassword = ''
                }
            }
            return newPassword2
        } else {
            for (let i = 0; i < length; i++) {
                newPassword += pass2[Math.floor(Math.random() * pass2.length)];
            }
        }
    } else if (string === 'hard') {
        if (typeof num === 'number') {
            for (let i = 0; i < num; i++) {
                for (let z = 0; z < length; z++) {
                    newPassword += all[Math.floor(Math.random() * all.length)];
                }
                if (newPassword2.indexOf(newPassword) !== -1) {
                    i--
                } else {
                    newPassword2.push(newPassword)
                    newPassword = ''
                }
            }
            return newPassword2
        } else {
            for (let i = 0; i < length; i++) {
                newPassword += all[Math.floor(Math.random() * all.length)];
            }
        }
    }
    return newPassword;
}
console.log(generatePassword(1, 'hard'));

// end