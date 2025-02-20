'use client';

import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import useRegister from '@/hooks/useRegister';
import Notification from '@/components/common/Notification';

export default function Register() {
    const { formData, notification, handleChange, handleSubmit, clearNotification } = useRegister();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={clearNotification}
                />
            )}

            <Link
                href="/"
                className="absolute top-4 left-4 px-3 py-1 text-sm font-medium rounded-md bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 transition-colors"
            >
                Back Home
            </Link>

            <section className="w-full max-w-md">
                <div className="container py-24">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="px-4 py-8 sm:px-10">
                            <h2 className="text-3xl font-extrabold text-center text-gray-600 dark:text-gray-200">
                                Register a new account
                            </h2>
                            <p className="mt-2 text-sm text-center text-purple-500 dark:text-purple-500">
                                Password Manager
                            </p>
                            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-zinc-700 dark:text-gray-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-zinc-700 dark:text-gray-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="new-password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-zinc-700 dark:text-gray-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Confirm Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="confirm-password"
                                            name="confirmPassword"
                                            type="password"
                                            autoComplete="new-password"
                                            required
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-zinc-700 dark:text-gray-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>

                            <div className="relative mt-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-white dark:border-gray-900"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="rounded-md px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-200">or</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="button"
                                    className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-zinc-700 dark:text-gray-200 dark:hover:bg-zinc-600 transition-colors"
                                >
                                    <FiGithub className="mr-2 text-xl" />
                                    Sign in with GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}