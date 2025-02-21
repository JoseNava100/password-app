'use client';

import MegaMenuDashboard from "@/components/common/MegaMenuDashboard";
import WidgetCount from "@/components/widget/WidgetCount";
import useAuth from '@/hooks/useAuth';

export default function DashboardPage() {
    useAuth();
    return (
        <section>
            <MegaMenuDashboard />
            <WidgetCount />
        </section>
    );
}