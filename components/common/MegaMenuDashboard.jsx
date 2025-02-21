'use client';

import { useState, useEffect, useRef } from 'react';
import ThemeToggle from '@/components/common/ThemeToggle';
import { TbLockPassword } from 'react-icons/tb';
import { IoKeyOutline } from "react-icons/io5";
import { GiHouseKeys } from "react-icons/gi";
import { FaChevronDown, FaChevronUp, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import useLogout from '@/hooks/useLogout';

const navListMenuItems = [
    {
        title: 'Passwords',
        description: 'Find the perfect solution for your needs.',
        icon: TbLockPassword,
        url: '/dashboard/passwords',
    },
    {
        title: 'Password Generator',
        description: 'Generate strong passwords.',
        icon: IoKeyOutline,
        url: '/dashboard/generate-password',
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
    const handleLogout = useLogout();

    return (
        <header className="w-full px-4 py-2 border-b border-purple-300 dark:border-purple-800 bg-white dark:bg-neutral-900 shadow-md rounded-lg mx-auto max-w-3xl mt-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <GiHouseKeys className="h-5 w-5 text-gray-800 dark:text-white" />
                    <Link href={'/dashboard'}> <h1 className="text-base font-semibold text-gray-900 dark:text-white">Password Manager</h1> </Link>
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
