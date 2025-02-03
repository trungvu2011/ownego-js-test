import React, { useState } from 'react';

const Header = ({ selectedStore, onSortChange, onFilterChange, toppings }) => {
    const [selectedToppings, setSelectedToppings] = useState([]);

    const toggleTopping = (topping) => {
        setSelectedToppings(prev =>
            prev.includes(topping)
                ? prev.filter(t => t !== topping)
                : [...prev, topping]
        );
    };

    const handleFilter = () => {
        onFilterChange(selectedToppings);
    };

    return (
        <header className="mx-4">
            <h1 className="text-5xl font-bold text-center mb-4 text-[#1D2C53]">
                {selectedStore ? selectedStore.name : 'Loading...'} Menu
            </h1>

            <div className="flex flex-wrap gap-4 justify-between items-center">
                {/* Nút Filter */}
                <button
                    className="bg-[#1D2C53] text-white px-6 py-2 rounded-md shadow"
                    onClick={handleFilter}
                >
                    Filter
                </button>

                {/* Bộ sắp xếp */}
                <div className="flex gap-2 items-center">
                    <label className="hidden md:block text-lg font-bold text-[#1D2C53]">Sort By</label>
                    <select
                        className="py-2 px-2 border rounded-md"
                        onChange={(e) => onSortChange(e.target.value)}
                    >
                        <option value="name-asc">Name (A → Z)</option>
                        <option value="name-dsc">Name (Z → A)</option>
                        <option value="price-asc">Price (Low → High)</option>
                        <option value="price-dsc">Price (High → Low)</option>
                    </select>
                </div>
            </div>

            {/* Khu vực chọn topping */}
            <div className="my-4 px-6 py-2 border rounded-md bg-white">
                <label className="text-lg font-bold">Toppings:</label>
                <div className="grid md:grid-cols-3 gap-2 mt-2 text-[#1D2C53] font-medium">
                    {toppings.map((topping, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={selectedToppings.includes(topping)}
                                onChange={() => toggleTopping(topping)}
                                className="w-4 h-4"
                            />
                            <span>{topping}</span>
                        </label>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
