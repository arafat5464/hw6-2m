function isPasswordStrong(password) {
    return typeof password === "string"
        && /^(?=.*\p{Lu})(?=.*\p{Ll})(?=.*\d)(?=.*[^\p{L}\p{N}\s])\S{9,}$/u.test(password);
}