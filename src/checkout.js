// src/checkout.js
const { isValidEmail } = require('./user');
const { calculateDiscount } = require('./order');

/**
 * 1. Інтеграційна функція: Перевіряє дані користувача та розраховує фінальну ціну замовлення.
 * Інтегрує isValidEmail та calculateDiscount.
 * @param {string} email
 * @param {number} price
 * @param {number} discountPercent
 * @returns {object}
 */
function placeOrder(email, price, discountPercent) {
    if (!isValidEmail(email)) {
        return { success: false, message: 'Невалідний email' };
    }
    const finalPrice = calculateDiscount(price, discountPercent);
    return {
        success: true,
        message: 'Замовлення оформлено',
        finalPrice: finalPrice
    };
}

module.exports = { placeOrder };