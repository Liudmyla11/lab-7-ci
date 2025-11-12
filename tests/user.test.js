// tests/user.test.js
const { isValidEmail, formatUsername } = require('../src/user');
const { calculateDiscount } = require('../src/order');

// Модульний тест 1: isValidEmail
test('Перевірка валідності email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid_email')).toBe(false);
    expect(isValidEmail(12345)).toBe(false); 
});

// Модульний тест 2: formatUsername
test('Форматування імені користувача', () => {
    expect(formatUsername('alice')).toBe('Alice');
    expect(formatUsername('BOB')).toBe('Bob');
    expect(formatUsername('')).toBe('');
});

// Модульний тест 3: calculateDiscount
test('Розрахунок ціни зі знижкою', () => {
    // Звичайна знижка
    expect(calculateDiscount(100, 10)).toBe(100.00); 
    // Дробові значення
    expect(calculateDiscount(50.50, 20)).toBe(40.40); 
    // Нульова знижка
    expect(calculateDiscount(200, 0)).toBe(200); 
});
