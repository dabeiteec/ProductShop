export const addBasketProduct = (addedProduct: object) => {
    try {
        const storage = localStorage.getItem('Products');
        const parsedStorage = storage ? JSON.parse(storage) : [];

        if (!Array.isArray(parsedStorage)) {
            throw new Error("Некорректный формат данных в localStorage");
        }

        const hasProduct = parsedStorage.find((item: any) => item.id === (addedProduct as any).id);
        if (hasProduct) {
            console.error("Товар уже добавлен в корзину");
            return false;
        }

        parsedStorage.push(addedProduct);
        localStorage.setItem('Products', JSON.stringify(parsedStorage));
        return true;
    } catch (error) {
        console.error("Ошибка добавления товара в корзину", error);
        return false;
    }
};


export const deleteBasketProduct = (key: string, id: number) => {
    try {
        const storage = localStorage.getItem(key);
        if (!storage) {
            throw new Error("Корзина пуста");
        }

        const parsedStorage = JSON.parse(storage);
        if (!Array.isArray(parsedStorage)) {
            throw new Error("Некорректный формат данных в localStorage");
        }

        const newStorage = parsedStorage.filter((item: any) => item.id !== id);
        if (newStorage.length === parsedStorage.length) {
            throw new Error("Товар с таким ID не найден");
        }

        localStorage.setItem(key, JSON.stringify(newStorage));
        return true;
    } catch (error) {
        console.error("Ошибка удаления товара из корзины", error);
        return false;
    }
};

export const setCountBusketProduct = () => {
    try {
        const storage = localStorage.getItem("Products");
        if (!storage) {
            return 0;
        }

        const parsedStorage = JSON.parse(storage);
        if (!Array.isArray(parsedStorage)) {
            throw new Error("Некорректный формат данных в localStorage");
        }

        return parsedStorage.length;
    } catch (error) {
        console.error("Ошибка получения количества товаров в корзине", error);
        return 0;
    }
};
