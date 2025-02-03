import React, { useState } from 'react';

const Sidebar = ({ stores, selectedStore, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Nút mở Sidebar - Chỉ hiển thị trên mobile */}
            <button
                className="md:hidden fixed top-4 left-4 bg-[#1D2C53] text-white px-3 py-2 rounded shadow-lg z-50"
                onClick={() => setIsOpen(true)}
            >
                Menu
            </button>

            {/* Overlay (nền mờ) khi mở Sidebar */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`fixed md:static top-0 left-0 min-h-screen w-64 bg-[#1D2C53] text-white py-6 transition-transform
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-1/4 z-50 flex flex-col items-center`}
            >
                {/* Nút đóng Sidebar trên mobile */}
                <button
                    className="md:hidden absolute top-4 right-4 text-white text-2xl"
                    onClick={() => setIsOpen(false)}
                >
                    ✕
                </button>

                <h2 className="text-3xl font-semibold py-4 px-4 text-center">Milk Tea Store</h2>
                <ul className="mt-4 text-xl w-full">
                    {stores.map((store) => (
                        <li
                            key={store.id}
                            className={`py-6 text-center w-full cursor-pointer ${selectedStore?.id === store.id ? 'bg-[#304476]' : ''}`}
                            onClick={() => {
                                onSelect(store);
                                setIsOpen(false);
                            }}
                        >
                            {store.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
