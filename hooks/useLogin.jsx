import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function useLogin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [notification, setNotification] = useState(null); 
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                if (formData.rememberMe) {
                    localStorage.setItem('authToken', data.data.token);
                } else {
                    sessionStorage.setItem('authToken', data.data.token);
                }
                router.push('/dashboard');
            } else {
                setNotification({ type: 'error', message: data.message || 'Login error' });
            }
        } catch (error) {
            setNotification({ type: 'error', message: 'Server connection error' });
        }
    };

    const clearNotification = () => {
        setNotification(null);
    };

    return {
        formData,
        notification,
        handleChange,
        handleSubmit,
        clearNotification,
    };
}