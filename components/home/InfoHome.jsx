import Link from 'next/link';
import { Lock, Key, Shield } from 'lucide-react';

const features = [
    {
        icon: <Lock size={60} className="text-purple-600" />,
        title: "Secure Storage",
        description: "Your passwords are encrypted with military-grade technology and protected against unauthorized access."
    },
    {
        icon: <Key size={60} className="text-purple-600" />,
        title: "Advanced Encryption",
        description: "We use AES-256 encryption and state-of-the-art security protocols to protect your data."
    },
    {
        icon: <Shield size={60} className="text-purple-600" />,
        title: "Comprehensive Protection",
        description: "Protection against phishing and immediate alerts for any attempted security breach."
    },
];

export default function InfoHome() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="container px-4 py-24 mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-300 mb-4">
                        Smart Password Management
                    </h1>
                    <p className="text-xl text-gray-700 dark:text-gray-500 max-w-2xl mx-auto">
                        Simplify your digital life with our secure and easy-to-use password manager
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="bg-indigo-50 dark:bg-zinc-800 p-4 rounded-full">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-500 mb-4 text-center">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-600 leading-relaxed text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/signup"
                        className="bg-purple-600 dark:bg-purple-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-700 transition-colors duration-300 inline-block"
                    >
                        Get Started Now
                    </Link>
                </div>
            </div>
        </section>
    );
}