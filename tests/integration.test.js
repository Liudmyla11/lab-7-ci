// tests/integration.test.js
const axios = require('axios');
const { placeOrder } = require('../src/checkout');
const { fetchAndValidateUser } = require('../src/api');

jest.mock('axios');

// Інтеграційний тест 1: placeOrder (Модуль + Модуль)
test('Інтеграція: Оформлення замовлення (email + знижка)', () => {
    // Валідний email, успішне оформлення
    let result = placeOrder('client@mail.com', 200, 25); 
    expect(result.success).toBe(true);
    expect(result.finalPrice).toBe(150.00);
    
    // Невалідний email, невдале оформлення
    result = placeOrder('bad-email', 100, 10);
    expect(result.success).toBe(false);
    expect(result.message).toBe('Невалідний email');
});

// Інтеграційний тест 2: fetchAndValidateUser (Модуль + API)
test('Інтеграція: Отримання та валідація користувача з API', async () => {
    // Налаштування мокованої відповіді з валідним email
    const mockResponseValid = { 
        data: { 
            email: 'valid.user@api.net' 
        } 
    };
    axios.get.mockResolvedValue(mockResponseValid);

    // Перший виклик: очікуємо true
    let isValid = await fetchAndValidateUser(1);
    expect(isValid).toBe(true);
    expect(axios.get).toHaveBeenCalledTimes(1); 

    // Налаштування мокованої відповіді з невалідним email
    const mockResponseInvalid = { 
        data: { 
            email: 'bad.email.no.dot' 
        } 
    };
    axios.get.mockResolvedValue(mockResponseInvalid); 

    // Другий виклик: очікуємо false
    isValid = await fetchAndValidateUser(2);
    expect(isValid).toBe(false);
    expect(axios.get).toHaveBeenCalledTimes(2);
});