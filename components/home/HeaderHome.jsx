import Link from 'next/link';
import { GiHouseKeys } from "react-icons/gi";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Header() {
    return (
        <header className="w-full px-4 py-2 border-b border-purple-300 dark:border-purple-800 bg-white dark:bg-neutral-900 shadow-md rounded-lg mx-auto max-w-lg mt-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <GiHouseKeys className="size-5 text-gray-800 dark:text-white" />
                    <h1 className="text-base font-semibold text-gray-900 dark:text-white">
                        Password Manager
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/login"
                        className="px-3 py-1 text-sm font-medium rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
                    >
                        Log In
                    </Link>

                    <Link
                        href="/signup"
                        className="px-3 py-1 text-sm font-medium rounded-md bg-purple-900 text-white hover:bg-purple-700 dark:bg-purple-500 dark:text-white dark:hover:bg-purple-700 transition-colors"
                    >
                        Sign Up
                    </Link>

                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}