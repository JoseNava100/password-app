'use client';

import MegaMenuDashboard from "@/components/common/MegaMenuDashboard";
import useAuth from '@/hooks/useAuth';

export default function PasswordsPage() {
    useAuth();

    return (
        <section>
            <MegaMenuDashboard />
            <h1>generar constraseña</h1>
        </section>
    );
}