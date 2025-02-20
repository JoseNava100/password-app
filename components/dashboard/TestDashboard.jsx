'use client';
import Link from 'next/link';
import { FiPlus, FiKey, FiClipboard } from 'react-icons/fi';
import { useState } from 'react';

export default function TestDashboard() {
    const [passwords, setPasswords] = useState([]);
    const [newPassword, setNewPassword] = useState('');
    const [generatedPassword, setGeneratedPassword] = useState('');

    const generatePassword = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let password = "";
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        setGeneratedPassword(password);
    };

    const addPassword = () => {
        if (newPassword.trim() !== '') {
            setPasswords([...passwords, newPassword]);
            setNewPassword('');
        }
    };

    const copyToClipboard = (password) => {
        navigator.clipboard.writeText(password);
        alert('Copied to clipboard!');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Link
                href="/"
                className="absolute top-4 left-4 px-3 py-1 text-sm font-medium rounded-md bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 transition-colors"
            >
                Back Home
            </Link>

            <section className="w-full max-w-2xl">
                <div className="container py-24">
                    <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
                        <div className="px-4 py-8 sm:px-10">
                            <h2 className="text-3xl font-extrabold text-center text-gray-600 dark:text-gray-200">
                                Password Manager
                            </h2>
                            <p className="mt-2 text-sm text-center text-purple-500 dark:text-purple-500">
                                Manage and generate your passwords securely
                            </p>

                            <div className="mt-6 space-y-6">
                                <div>
                                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Add New Password
                                    </label>
                                    <div className="mt-1 flex">
                                        <input
                                            id="new-password"
                                            type="text"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-zinc-700 dark:text-gray-200"
                                            placeholder="Enter new password"
                                        />
                                        <button
                                            onClick={addPassword}
                                            className="ml-2 flex items-center justify-center px-4 text-base font-medium text-white transition duration-500 ease-in-out transform bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                        >
                                            <FiPlus />
                                        </button>
                                    </div>
                                </div>

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
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                        Saved Passwords
                                    </h3>
                                    <ul className="mt-2 space-y-2">
                                        {passwords.map((password, index) => (
                                            <li key={index} className="flex items-center justify-between px-5 py-3 text-base text-gray-600 bg-gray-50 rounded-lg dark:bg-zinc-700 dark:text-gray-200">
                                                {password}
                                                <button
                                                    onClick={() => copyToClipboard(password)}
                                                    className="text-purple-600 hover:text-purple-500 dark:text-purple-800 dark:hover:text-purple-700"
                                                >
                                                    <FiClipboard />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
