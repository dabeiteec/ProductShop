    import React, { useState } from "react";
    import styled from "styled-components";
    import { createUser, authUser } from "../../../5_features/user/reg";
    import { myGreen, myHoverGreen } from "../../../6_shared/colors";

    interface ModalProps {
    formType: boolean;
    onClose: () => void;
    isOpen: boolean;
    }

    const ModalWindow: React.FC<ModalProps> = ({ formType, isOpen, onClose }) => {
        if (!isOpen) return null;
    
        const [login, setLogin] = useState("");
        const [password, setPassword] = useState("");
        const [loginError, setLoginError] = useState("");
        const [passwordError, setPasswordError] = useState("");
        const [errorMessage, setErrorMessage] = useState("");  // Для ошибок
        const [successMessage, setSuccessMessage] = useState("");  // Для успешных сообщений
    
        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
    
            setLoginError('');
            setPasswordError('');
            setErrorMessage('');
            setSuccessMessage('');
    
            if (login.trim() === "") {
                setLoginError("Логин не может быть пустым");
                return;
            }
    
            if (password.trim() === "") {
                setPasswordError("Пароль не может быть пустым");
                return;
            }
    
            try {
                if (formType) {
                    const registrationResponse = await toRegistrateUser(login, password);
                    if (registrationResponse) {
                        setSuccessMessage("Регистрация прошла успешно!");
                    }
                } else {
                    const authResponse = await toAutentificateeUser(login, password);
                    if (authResponse && !authResponse.error) {
                        setSuccessMessage("Авторизация успешна!");
                    } else {
                        setErrorMessage(authResponse.error || "Ошибка при авторизации.");
                    }
                }
            } catch (error) {
                setErrorMessage(`Ошибка при ${formType ? "регистрации" : "авторизации"}`);
                console.error(`Ошибка при ${formType ? "регистрации" : "авторизации"}:`, error);
            }
        };
    
        const toRegistrateUser = async (login: string, password: string) => {
            const response = await createUser(login, password);
            return response;
        };
    
        const toAutentificateeUser = async (login: string, password: string) => {
            const response = await authUser(login, password);
            return response;
        };
    
        return (
            <Overlay>
                <ModalContent>
                    <CloseButton onClick={onClose}>×</CloseButton>
                    <Title>{formType ? "Registration" : "Auth"}</Title>
                    <Form onSubmit={handleSubmit}>
                        <Input 
                            type="text" 
                            placeholder="Login" 
                            value={login} 
                            onChange={(e) => setLogin(e.target.value)} 
                        />
                        {loginError && <ErrorText>{loginError}</ErrorText>}
                        <Input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        {passwordError && <ErrorText>{passwordError}</ErrorText>}
                        <SubmitButton type="submit">
                            {formType ? "Register" : "Login"}
                        </SubmitButton>
                        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                        {successMessage && <SuccessText>{successMessage}</SuccessText>}
                    </Form>
                </ModalContent>
            </Overlay>
        );
    };
    

    export default ModalWindow;

    const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    `;

    const ModalContent = styled.div`
    background: #fff;
    padding: 2rem;
    width: 90%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    position: relative;
    `;

    const CloseButton = styled.span`
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: red;
    }
    `;

    const Title = styled.h2`
    margin-bottom: 1rem;
    `;

    const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `;

    const Input = styled.input`
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    &:focus {
        border-color: #007bff;
    }
    `;

    const SubmitButton = styled.button`
    padding: 0.75rem;
    font-size: 1rem;
    background-color: ${myGreen};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
    &:hover {
        background-color: ${myHoverGreen};
    }
    `;

    const ErrorText = styled.span`
    color: red;
    font-size: 0.875rem;
    text-align: left;
    `;

    const SuccessText = styled.span`
    color: green;
    font-size: 0.875rem;
    text-align: left;
    `;
