
const baseUrl = 'http://localhost:8081/api/';
const accessToken = localStorage.getItem("token");
export const createBasketItem = async (productId: number) => {
    const url = baseUrl + 'basket';
    
    const basketData = {
        product_id: productId
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(basketData)
        });

        if (!response.ok) {
            throw new Error(`Ошибка добавления в корзину: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Ошибка добавления в корзину", error);
        return null;
    }
};

// **Получить все товары в корзине**
export const getAllBasketItems = async () => {
    const url = baseUrl + 'basket';

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`Ошибка получения корзины: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Ошибка получения корзины", error);
        return null;
    }
};

// **Удалить товар из корзины**
export const deleteBasketItem = async (item_id:number) => {
    const url = `${baseUrl}basket`;

    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify({product_id: item_id})
        });

        if (!response.ok) {
            throw new Error(`Ошибка удаления товара из корзины: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Ошибка удаления товара из корзины", error);
        return null;
    }
};

