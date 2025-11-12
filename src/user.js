// src/user.js

/**
 * 1. Модульна функція: Перевіряє, чи має рядок базовий формат електронної пошти.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    // Проста перевірка на наявність '@' та '.'
    return typeof email === 'string' && email.includes('@') && email.includes('.');
}

/**
 * 2. Модульна функція: Форматує ім'я користувача (робить першу літеру великою).
 * @param {string} name
 * @returns {string}
 */
function formatUsername(name) {
    if (!name || typeof name !== 'string') return '';
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

module.exports = { isValidEmail, formatUsername };