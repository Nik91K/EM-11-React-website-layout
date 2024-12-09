import React, { useEffect, useState } from 'react';
import CreateCategory from './CreateCategory/CreateCategory';
import CategoryList from './CreateCategory/CategoryList';
import './sidebar.css';

const Sidebar: React.FC = () => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [categories]);

    useEffect(() => {
        const savedCategories = JSON.parse(localStorage.getItem('categories') || '[]');
        setCategories(savedCategories);
    }, []);

    const addCategory = (cat: string) => {
        if (cat.trim() && !categories.includes(cat.trim())){
            setCategories([...categories, cat.trim()]);
        }
    }

    const removeCategory = (categoryToRemove: string) => {
        setCategories(categories.filter((item) => item !== categoryToRemove));
    };

    return (
        <div className='Main-Sidebar-Div'>
            <h2>Category</h2>
            <CreateCategory addCategory={addCategory}/>
            <CategoryList categorys={categories} removeCategory={removeCategory}/>
        </div>
    )
}

export default Sidebar;