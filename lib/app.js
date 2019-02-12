
export const sum = (num1, num2) => {
    verifyNumber(num1, num2);
    return num1 + num2;
}
export const div = (num1, num2) => {
    verifyNumber(num1, num2);
    return num2 === 0 ? 'Infinity' : num1 / num2;
}
export const sub = (num1, num2) => {
    verifyNumber(num1, num2);
    return num1 - num2;
}
export const mult = (num1, num2) => {
    verifyNumber(num1, num2);
    return num1 * num2;
}
export const pow = (num1, num2) => {
    verifyNumber(num1, num2);
    return num1 * num2;
}

const verifyNumber = (num1, num2 = 0) => {
    
    if (isNaN(num1)) {
        throw Error(`We couldn't calculate because ${num1} is not a number`);
    }
    if (isNaN(num2)) {
        throw Error(`We couldn't calculate because ${num2} is not a number`);
    }
    num1 = Number(num1);
    num2 = Number(num2);
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw Error('Only numbers are allowed');
    }
};