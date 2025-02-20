'use client';

import MegaMenuDashboard from "@/components/dashboard/MegaMenuDashboard";
import useAuth from '@/hooks/useAuth';

export default function DashboardPage() {
    useAuth();
    return (
        <section>
            <MegaMenuDashboard />
        </section>
    );
}