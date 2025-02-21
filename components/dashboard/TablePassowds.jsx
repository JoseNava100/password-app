import { useState } from "react";
import { FiPlus, FiSearch, FiEye, FiCopy, FiEdit2, FiTrash2 } from "react-icons/fi";
import useFetchPasswords from "@/hooks/useFetchPasswords";

export default function TableDashboard() {
    const TABLE_HEAD = ["Name App", "Username", "Email", "Address Page", "Password", "Actions"];
    const { data, loading } = useFetchPasswords();
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.username.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="w-full max-w-5xl bg-purple-100 dark:bg-neutral-900 shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-200">Table Passwords</h2>
                        <p className="text-neutral-600 dark:text-purple-400">Manage your saved passwords securely.</p>
                    </div>
                    <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                        <FiPlus />
                    </button>
                </div>
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-900 dark:text-white bg-gray-50 dark:bg-neutral-700 border-purple-300 dark:border-purple-600 focus:ring focus:ring-purple-500"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                        <thead className="text-xs uppercase bg-purple-200 dark:bg-purple-700">
                            <tr>
                                {TABLE_HEAD.map((head, index) => (
                                    <th key={index} className="px-6 py-3">{head}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={TABLE_HEAD.length} className="px-6 py-4 text-center">Loading...</td>
                                </tr>
                            ) : paginatedData.length > 0 ? (
                                paginatedData.map((item, index) => (
                                    <tr key={index} className="border-b dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-700">
                                        <td className="px-6 py-4">{item.name}</td>
                                        <td className="px-6 py-4">{item.username}</td>
                                        <td className="px-6 py-4">{item.email}</td>
                                        <td className="px-6 py-4">{item.URL}</td>
                                        <td className="px-6 py-4">{item.password_encrypted}</td>
                                        <td className="px-6 py-4 text-center flex justify-center gap-3">
                                            <button className="text-blue-600 dark:text-blue-400 hover:underline"><FiEye /></button>
                                            <button className="text-gray-600 dark:text-gray-400 hover:underline"><FiCopy /></button>
                                            <button className="text-green-600 dark:text-green-400 hover:underline"><FiEdit2 /></button>
                                            <button className="text-red-600 dark:text-red-400 hover:underline"><FiTrash2 /></button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={TABLE_HEAD.length} className="px-6 py-4 text-center">No data found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-gray-900 dark:text-white">Page {currentPage} of {totalPages}</span>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}