'use client';

import MegaMenuDashboard from "@/components/common/MegaMenuDashboard";
import TableDashboard from "@/components/dashboard/TablePassowds";
import useAuth from '@/hooks/useAuth';

export default function PasswordsPage() {
    useAuth();
    return (
        <section>
            <MegaMenuDashboard />
            <TableDashboard />
        </section>
    );
}