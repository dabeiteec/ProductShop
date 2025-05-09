const baseUrl = 'http://localhost:8081/api/';


export const createUser = async (userName:string,UserPassword:string)=>{
    const url = baseUrl+'user';
    const userData ={ 
        name:userName,
        password:UserPassword
    }
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        });
        if(!response.ok){
            throw new Error(`Ошибка создания пользователя:${response.status}`);
        };
        ////
        const userStatus = await response.json();
        console.log(userStatus)
        ///
        return userStatus;
    }catch(error){
        console.error("Ошибка создания пользователя",error);
        return null;
    };
};

export const authUser = async (userName: string, userPassword: string) => {
    const url = baseUrl + 'user/auth';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: userName, password: userPassword })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Ошибка авторизации: ${response.status}`);
        }
                const data = await response.json();
        console.log('Response Data:', data.message);
        const token = data.accessToken;
        console.log('Token:', token);
        localStorage.setItem('token', token);
        return data;
    } catch (error:any) {
        console.error("Ошибка авторизации", error);
        return { error: error.message };
    }
};
