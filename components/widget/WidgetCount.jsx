'use client';
import useWidgetCount from '@/hooks/useWidgetCount';
import { FaSpinner } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';

export default function WidgetCount() {
    const { count, loading, error } = useWidgetCount();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                className="p-8 border rounded-2xl shadow-2xl text-center bg-zinc-800 transition-opacity duration-300"
                aria-live="polite"
            >
                {loading && (
                    <div className="flex flex-col items-center space-y-2">
                        <FaSpinner className="animate-spin text-4xl text-blue-500" />
                        <p className="text-lg text-gray-300">Loading...</p>
                    </div>
                )}

                {error && (
                    <div className="flex flex-col items-center space-y-2 text-red-500">
                        <MdErrorOutline className="text-4xl" />
                        <p className="text-lg">{error}</p>
                    </div>
                )}

                {!loading && !error && (
                    <div className="space-y-4">
                        <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Password Count
                        </h3>
                        <p className="text-2xl text-gray-300">{count}</p>
                    </div>
                )}
            </div>
        </div>
    );
}