import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuCard = ({ store, sortBy, filterToppings }) => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        if (store) {
            axios.get(`http://localhost:8080/api/stores/${store.id}/menu`)
                .then((response) => {
                    let items = response.data.menu.map((item) => ({
                        ...item,
                        toppings: Array.isArray(item.toppings)
                            ? item.toppings
                            : item.toppings.split(",").map(t => t.trim()) || []
                    }));

                    // Lọc theo nhiều topping được chọn
                    if (filterToppings.length > 0) {
                        items = items.filter(item =>
                            filterToppings.every(t => item.toppings.includes(t))
                        );
                    }

                    // Sắp xếp danh sách
                    if (sortBy === "name-asc") {
                        items.sort((a, b) => a.name.localeCompare(b.name));
                    } else if (sortBy === "name-dsc") {
                        items.sort((a, b) => b.name.localeCompare(a.name));
                    } else if (sortBy === "price-asc") {
                        items.sort((a, b) => a.price - b.price);
                    } else if (sortBy === "price-dsc") {
                        items.sort((a, b) => b.price - a.price);
                    }

                    setMenuItems(items);
                })
                .catch((error) => console.error("Error fetching menu:", error));
        }
    }, [store, sortBy, filterToppings]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {menuItems.map((item) => (
                <div
                    key={item.id}
                    className="border p-4 rounded-md shadow-lg bg-white h-56 flex flex-col justify-between"
                >
                    <h3 className="text-2xl font-bold text-[#1D2C53]">{item.name}</h3>
                    <hr className="my-2 border-t-2 border-[#1D2C53]" />
                    <div className="flex-1 overflow-y-auto max-h-20">
                        <p className="text-base text-gray-600">
                            <span className="font-semibold">Toppings:</span>{" "}
                            {item.toppings.length > 0 ? item.toppings.join(", ") : "None"}
                        </p>
                    </div>
                    <div className="flex justify-end mt-2">
                        <span className="text-2xl font-semibold text-[#1D2C53]">${item.price.toFixed(1)}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuCard;
