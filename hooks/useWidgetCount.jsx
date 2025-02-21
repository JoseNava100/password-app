import { useState, useEffect } from 'react';

export default function useWidgetCount() {
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCount = async () => {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');

        if (!token) {
            setError('User is not authenticated. No token found.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/widgetCount', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || 'Error retrieving data from API');
                setLoading(false);
                return;
            }

            const data = await response.json();

            if (data && data.data && data.data.count !== undefined) {
                setCount(data.data.count);
            } else {
                setError('Invalid response format.');
            }
        } catch (error) {
            setError('Server connection error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCount();
    }, []);

    return {
        count,
        loading,
        error,
    };
}
