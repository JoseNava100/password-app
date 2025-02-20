'use client';

import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

export default function Notification({ message, type, onClose }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    if (!visible) return null;

    const bgColor = type === 'success' ? 'bg-purple-500 text-black dark:bg-purple-900 dark:text-white' : 'bg-zinc-200 text-black dark:bg-zinc-900 dark:text-white';
    const borderColor = type === 'success' ? 'border-purple-500 dark:border-purple-900' : 'border-zinc-200 dark:border-zinc-900';
    const Icon = type === 'success' ? AiOutlineCheckCircle : AiOutlineCloseCircle;

    return (
        <div
            className={`fixed bottom-4 right-4 p-3 rounded-lg shadow-lg ${bgColor} border ${borderColor} animate-neon min-w-[300px]`}
        >
            <div className="flex items-center space-x-2">
                <Icon className="text-xl" />
                <span className="text-sm">{message}</span>
            </div>
        </div>
    );
}