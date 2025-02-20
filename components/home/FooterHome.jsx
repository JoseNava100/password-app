import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="text-purple-200 dark:text-gray-300">
                        Copyright  &copy; {new Date().getFullYear()} <strong className="text-purple-500 dark:text-purple-400">@Password Manager</strong>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-600"
                        >
                            <FaSquareFacebook className="h-6 w-6" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-600"
                        >
                            <FaSquareInstagram className="h-6 w-6" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-600"
                        >
                            <FaSquareXTwitter className="h-6 w-6" />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-600"
                        >
                            <FaSquareGithub className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}