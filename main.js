/**
 * Функция для расчета выручки
 * @param purchase запись о покупке
 * @param _product карточка товара
 * @returns {number}
 */
function calculateSimpleRevenue(purchase, _product) {
   //  Расчет выручки от операции

   const {discount = 0, sale_price = 0, quantity = 0} = purchase;
   const discountFactor = 1 - (discount / 100);

   return sale_price * quantity * discountFactor;
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
        throw new Error('Некорректные входные данные');
    }

    // Проверка наличия опций

    if (options == null
        || typeof options !== "object"
    ) {
        throw new Error('Опции должны быть объектом');
    }

    const {calculateRevenue, calculateBonus} = options;

    if (calculateRevenue === undefined
        || calculateBonus === undefined
    ) {
        throw new Error('Переменные в опциях не определены')
    }

    if (calculateRevenue !== "function"
        || calculateBonus !== "function"
    ) { 
        throw new Error('Переменные в опциях должны быть функциями');
    }

    //  Подготовка промежуточных данных для сбора статистики

    const sellerStats = data.sellers.map(seller => ({
        id: seller.id,
        name: '${seller.first_name} ${seller.last_name}',
        revenue: 0,
        profit: 0,
        sales_count: 0,
        products_sold: {}
    }));

    //  Индексация продавцов и товаров для быстрого доступа

    const sellerIndex = sellerStats.reduce((acc,s) => {
        acc[s.id] = s;
        return acc;
    }, {});

    const productIndex = Object.fromEntries(
        data.products.map(p => [p.sku, p])
    );

    //  Расчет выручки и прибыли для каждого продавца

    data.purchase_records.forEach(item => {
        const product = productIndex[item.sku];
        if (!seller) return;
        seller.sales_count += 1;
        const checkRevenue = Number(record.total_amount ?? 0);
        seller.revenu += checkRevenue;
    })

    record.items.forEach(itemn => {
        const products = productIndex[item.sku];
        if (!product) return;
        
        const qty = Number(item.quantity ?? 0);
        const cost = Number(product.purchase_price) * qty;

        const revenue = Number(calculateRevenue(item, product)) || 0;

        const profit = revenue - cost;

        seller.profit += profit;

        if (!seller.products_sold[item.sku]) {
            seller.products_sold[item.sku] = 0;
        }

        seller.products_sold[item.sku] += qty;
        });
    };

    //  Сортировка продавцов по прибыли

    sellerStats.sort((a, b) => (b.profit ?? 0) - (a.profit ?? 0));

    // Бонус продавца

    seller.bonus = calculateBonus(index, sellerStats.length, seller);

    //  Назначение премий на основе ранжирования

    seller.top_products = Object 
                        .entries(seller.products_sold)
                        .map(([sku, quantity]) => ({sku, quantity}))
                        .sort(((a, b) => b.quantity - a.quantity))
                        .slice(0, 10);

    //  Подготовка итоговой коллекции с нужными полями

    const to2 = n=> + Number(n ?? 0).toFixed(2);

    return sellerStats.map(seller => ({
        seller_id: String(seller.id),
        name: seller.name,
        revenue: to2(seller.revenue),
        profit: to2(seller.profit),
        selles_count: seller.seles_count,
        top_products: seller.top_products,
        bonus: to2(seller.bonus)
    }));

