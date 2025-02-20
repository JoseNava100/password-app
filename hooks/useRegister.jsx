import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function useRegister() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [notification, setNotification] = useState(null);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setNotification({ type: 'error', message: 'Passwords do not match' });
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    password_confirmation: formData.confirmPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setNotification({ type: 'success', message: 'Successful registration!' });
                setTimeout(() => {
                    router.push('/dashboard');
                }, 4000);
            } else {
                setNotification({ type: 'error', message: data.message || 'Error registering user' });
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