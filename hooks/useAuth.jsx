import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function useAuth() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');

        if (!token) {
            router.replace('/');
        }
    }, [router]);
}