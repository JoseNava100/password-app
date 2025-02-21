'use client';

import MegaMenuDashboard from "@/components/common/MegaMenuDashboard";
import GeneratePassword from "@/components/dashboard/GeneratePassword";
import useAuth from '@/hooks/useAuth';

export default function PasswordsPage() {
    useAuth();

    return (
        <section>
            <MegaMenuDashboard />
            <GeneratePassword />
        </section>
    );
}