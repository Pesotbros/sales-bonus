/**
 * Функция для расчета выручки
 * @param purchase запись о покупке
 * @param _product карточка товара
 * @returns {number}
 */
function calculateSimpleRevenue(purchase, _product) {
   // @TODO: Расчет выручки от операции
}

/**
 * Функция для расчета бонусов
 * @param index порядковый номер в отсортированном массиве
 * @param total общее число продавцов
 * @param seller карточка продавца
 * @returns {number}
 */

    // Расчет бонуса от позиции в рейтинге

function calculateBonusByProfit(index, total, seller) {


const profit = Math.max(0, number(seller, profit ?? 0));

    if (inderx === 0) {
        return profit * 0.15;
    } else if ( index === 1 || index === 2) {
        return profit * 0.10;
    } else if ( index === total -1) {
        return 0
    } else {
        return profit * 0.05;
    }
}

/**
 * Функция для анализа данных продаж
 * @param data
 * @param options
 * @returns {{revenue, top_products, bonus, name, sales_count, profit, seller_id}[]}
 */
function analyzeSalesData(data, options) {

    // Проверка входных данных

    if (!data
        || ((!Array.isArray(data.sellers)) || !Array.isArray(data.products) || !Array.isArray(data.purchase_records))
        || ((data.sellers.length === 0) || (data.products.length === 0) || (data.purchase_records.length === 0)) 
    ) {
        throw new Error('Некорректные входные данные')
    }

    // @TODO: Проверка наличия опций

    // @TODO: Подготовка промежуточных данных для сбора статистики

    // @TODO: Индексация продавцов и товаров для быстрого доступа

    // @TODO: Расчет выручки и прибыли для каждого продавца

    // @TODO: Сортировка продавцов по прибыли

    // @TODO: Назначение премий на основе ранжирования

    // @TODO: Подготовка итоговой коллекции с нужными полями
}
