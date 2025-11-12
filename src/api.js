// src/api.js
const axios = require('axios');
const { isValidEmail } = require('./user');

/**
 * 2. Інтеграційна функція: Отримує дані користувача з API та перевіряє валідність його email.
 * Інтегрує axios та isValidEmail.
 * @param {number} userId
 * @returns {boolean} - true, якщо email валідний.
 */
async function fetchAndValidateUser(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    try {
        const response = await axios.get(url);
        const userEmail = response.data.email;
        // Використання модульної функції
        return isValidEmail(userEmail); 
    } catch (error) {
        console.error('Помилка API:', error.message);
        return false;
    }
}

module.exports = { fetchAndValidateUser };
