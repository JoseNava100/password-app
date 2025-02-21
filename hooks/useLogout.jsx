import { useRouter } from 'next/navigation';

export default function useLogout() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const token =
                typeof window !== 'undefined'
                    ? localStorage.getItem('authToken') || sessionStorage.getItem('authToken')
                    : null;

            if (!token) {
                console.warn('No Authorization');
                return;
            }

            const response = await fetch('http://localhost:8000/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                localStorage.removeItem('authToken');
                sessionStorage.removeItem('authToken');
                router.push('/');
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return handleLogout;
}
