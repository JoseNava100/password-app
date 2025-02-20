'use client';
import { useState, useEffect } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

const themes = ["Light", "Dark", "System"];

export default function ThemeToggle() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState("System");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "System";
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);

            const updateDarkMode = () => {
                const isDark =
                    theme === "Dark" ||
                    (theme === "System" && window.matchMedia("(prefers-color-scheme: dark)").matches);
                document.documentElement.classList.toggle("dark", isDark);
            };

            updateDarkMode();

            if (theme === "System") {
                const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
                const handleChange = () => updateDarkMode();
                mediaQuery.addEventListener("change", handleChange);

                return () => mediaQuery.removeEventListener("change", handleChange);
            }
        }
    }, [theme]);

    return (
        <div className="relative">
            <button
                className="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Cambiar tema"
            >
                {theme === "Light" && <Sun className="w-5 h-5" />}
                {theme === "Dark" && <Moon className="w-5 h-5" />}
                {theme === "System" && <Monitor className="w-5 h-5" />}
            </button>
            {menuOpen && (
                <div className="absolute top-10 right-0 text-sm p-2 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-lg backdrop-blur-md transition-opacity duration-200">
                    <ul>
                        {themes.map((t) => (
                            <li
                                key={t}
                                className={`px-2 py-1.5 cursor-pointer rounded-sm hover:bg-purple-400/40 dark:hover:bg-purple-500/50 ${theme === t ? "font-bold" : ""
                                    }`}
                                onClick={() => {
                                    setTheme(t);
                                    setMenuOpen(false);
                                }}
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}