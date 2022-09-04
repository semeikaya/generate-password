function generatePassword(length, string, num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
    const all = alphabet + digits + symbols
    const pass2 = digits + alphabet
    let newPassword = '';
    let newPassword2 = [];
    let newPassword3 = ''


    if (string === 'easy') {
        for (let i = 0; i < length; i++) {
            newPassword += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
    } else if (string === 'medium') {
        for (let i = 0; i < length; i++) {
            newPassword += pass2[Math.floor(Math.random() * pass2.length)];
        }
    } else if (string === 'hard') {
        if (typeof num === 'number') {
            for (let i = 0; i < num; i++) {
                for (let i = 0; i < length; i++) {
                    newPassword += all[Math.floor(Math.random() * all.length)];
                }
                
                newPassword3 = newPassword.slice (- (newPassword.length / (i + 1)))
                for (let i = 0; i < length; i++) {
                    if (newPassword2.indexOf(newPassword3) === -1) {
                        break;
                    }
                    newPassword += all[Math.floor(Math.random() * all.length)];
                }
                newPassword2.push(newPassword3)
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
console.log(generatePassword(1, 'hard', 2));

// end