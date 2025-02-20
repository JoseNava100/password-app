'use client';

import MegaMenuDashboard from "@/components/common/MegaMenuDashboard";
import useAuth from '@/hooks/useAuth';

export default function DashboardPage() {
    useAuth();
    return (
        <section>
            <MegaMenuDashboard />
        </section>
    );
}