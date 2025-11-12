// src/order.js

/**
 * 3. Модульна функція: Розраховує ціну зі знижкою.
 * @param {number} price - Початкова ціна.
 * @param {number} percent - Відсоток знижки (0 до 100).
 * @returns {number} - Фінальна ціна.
 */
function calculateDiscount(price, percent) {
    if (price <= 0 || percent < 0 || percent > 100) {
        return price;
    }
    const discountAmount = price * (percent / 100);
    return parseFloat((price - discountAmount).toFixed(2));
}

module.exports = { calculateDiscount };