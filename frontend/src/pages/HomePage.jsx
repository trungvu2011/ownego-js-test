import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MenuCard from '../components/MenuCard';
import axios from 'axios';

const HomePage = () => {
    const [stores, setStores] = useState([]);
    const [selectedStore, setSelectedStore] = useState(null);
    const [sortBy, setSortBy] = useState('name');
    const [filterToppings, setFilterToppings] = useState([]);
    const [toppings, setToppings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/stores')
            .then((response) => {
                setStores(response.data);
                if (response.data.length > 0) {
                    setSelectedStore(response.data[0]);
                }
            })
            .catch((error) => console.error("Error fetching stores:", error));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8080/api/toppings')
            .then((response) => setToppings(response.data))
            .catch((error) => console.error("Error fetching toppings:", error));
    }, []);

    return (
        <div className="flex min-h-screen">
            <Sidebar stores={stores} selectedStore={selectedStore} onSelect={setSelectedStore} />
            <main className="md:w-3/4 w-full p-6 bg-[#F0F0F0]">
                <Header selectedStore={selectedStore} onSortChange={setSortBy} onFilterChange={setFilterToppings} toppings={toppings} />
                {selectedStore && <MenuCard store={selectedStore} sortBy={sortBy} filterToppings={filterToppings} />}
            </main>
        </div>
    );
};

export default HomePage;
