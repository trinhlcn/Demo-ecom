export const random = (number) => {
    let text = '';
    let possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < number; i++) {text += possible.charAt(Math.floor(Math.random() * possible.length))}

    return text;
};

export const checkIfElExists = (el) => {
    let isExists = false;

    if (document.querySelector(el)) {
        isExists = true;
    }

    return isExists;
};