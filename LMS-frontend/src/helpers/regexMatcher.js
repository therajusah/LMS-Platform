export function isEmail(string) {
    return string.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/);
}

export function isValidPassword(string) {
    return string.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.* ).{8,16}$/);
}
