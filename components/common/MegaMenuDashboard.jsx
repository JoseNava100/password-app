'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Key } from 'lucide-react';
import ThemeToggle from '@/components/common/ThemeToggle';
import { TbLockPassword } from 'react-icons/tb';
import { FaChevronDown, FaChevronUp, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const navListMenuItems = [
    {
        title: 'Passwords',
        description: 'Find the perfect solution for your needs.',
        icon: TbLockPassword,
        url: '/dashboard/passwords', // corregir errores de direccionamiento
    },
    {
        title: 'Password Generator',
        description: 'Generate strong passwords.',
        icon: TbLockPassword,
        url: '/dashboard/generate-password', // corregir errores de direccionamiento
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 dark:text-white"
            >
                Resources {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isMenuOpen && (
                <div className="absolute left-0 mt-2 w-60 rounded-lg bg-white dark:bg-neutral-900 shadow-lg z-10">
                    <ul className="py-2">
                        {navListMenuItems.map(({ icon: Icon, title, description, url }, index) => (
                            <Link key={index} href={url} passHref>
                                <div className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-700 flex items-center gap-3">
                                    <div className="rounded-lg bg-gray-100 dark:bg-neutral-800 p-2">
                                        <Icon className="h-5 w-5 text-gray-900 dark:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
                                        <p className="text-xs text-gray-500 dark:text-neutral-400">{description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default function MegaMenuDashboard() {
    const router = useRouter();
    const handleLogout = useCallback(async () => {
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
    }, []);

    return (
        <header className="w-full px-4 py-2 border-b border-purple-300 dark:border-purple-800 bg-white dark:bg-neutral-900 shadow-md rounded-lg mx-auto max-w-3xl mt-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-gray-800 dark:text-white" />
                    <h1 className="text-base font-semibold text-gray-900 dark:text-white">Password Manager</h1>
                </div>
                <div className="flex items-center gap-3">
                    <NavListMenu />
                    <ThemeToggle />
                    <ProfileToggle onLogout={handleLogout} />
                </div>
            </div>
        </header>
    );
}

function ProfileToggle({ onLogout }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 dark:text-white"
            >
                <FaUserCircle className="h-6 w-6" />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 min-w-[150px] rounded-lg bg-white dark:bg-neutral-900 shadow-lg z-10">
                    <ul>
                        <li>
                            <a href="#settings" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-700 flex items-center gap-2">
                                <FaCog className="inline-block" /> Settings
                            </a>
                        </li>
                        <li>
                            <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-700 flex items-center gap-2">
                                <FaSignOutAlt className="inline-block" /> Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}