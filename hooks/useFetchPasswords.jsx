import { useState, useEffect } from "react";

export default function useFetchPasswords() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPasswords = async () => {
            try {
                const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

                if (!token) {
                    console.error("No token found");
                    setData([]);
                    setLoading(false);
                    return;
                }

                const response = await fetch("http://localhost:8000/api/passwords", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                const result = await response.json();

                if (response.ok) {
                    setData(result.data);
                } else {
                    console.error("Error fetching data:", result.message);
                    setData([]);
                }
            } catch (error) {
                console.error("Fetch error:", error);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPasswords();
    }, []);

    return { data, loading };
}
