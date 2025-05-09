const baseUrl = 'http://localhost:8081/api/';
//TODO пробежаться по всем апи и пофиксить бейз урл
export const getProducts = async () => {
    const url = baseUrl +'product'
    
    try {
        const response = await fetch(url, {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Ошибка при загрузке продуктов:", error);
        return null; 
    }
};