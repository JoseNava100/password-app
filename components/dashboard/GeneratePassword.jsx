'use client';

import Link from 'next/link';
import { FiKey, FiClipboard } from 'react-icons/fi';
import { useState } from 'react';
import Notification from '@/components/common/Notification'; 

export default function PasswordGenerator() {
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [notification, setNotification] = useState(null);

    const generatePassword = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let password = "";
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        setGeneratedPassword(password);
    };

    const copyToClipboard = (password) => {
        navigator.clipboard.writeText(password);
        setNotification({
            message: 'Password copied to clipboard!',
            type: 'success'
        });
    };

    const handleCloseNotification = () => {
        setNotification(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <section className="w-full max-w-2xl">
                <div className="container py-24">
                    <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
                        <div className="px-4 py-8 sm:px-10">
                            <h2 className="text-3xl font-extrabold text-center text-gray-600 dark:text-gray-200">
                                Password Generator
                            </h2>
                            <p className="mt-2 text-sm text-center text-purple-500 dark:text-purple-500">
                                Generate your password securely
                            </p>

                            <div className="mt-6 space-y-6">
                                <div>
                                    <label htmlFor="generate-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Generate Password
                                    </label>
                                    <div className="mt-1 flex">
                                        <input
                                            id="generate-password"
                                            type="text"
                                            value={generatedPassword}
                                            readOnly
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-zinc-700 dark:text-gray-200"
                                            placeholder="Generated password"
                                        />
                                        <button
                                            onClick={generatePassword}
                                            className="ml-2 flex items-center justify-center px-4 text-base font-medium text-white transition duration-500 ease-in-out transform bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                        >
                                            <FiKey />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    {generatedPassword && (
                                        <button
                                            onClick={() => copyToClipboard(generatedPassword)}
                                            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-purple-700 dark:hover:text-white dark:hover:rounded-lg flex items-center gap-2 text-purple-600 dark:text-purple-800"
                                        >
                                            <FiClipboard className="inline-block" /> Copy to Clipboard
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={handleCloseNotification}
                />
            )}
        </div>
    );
}
