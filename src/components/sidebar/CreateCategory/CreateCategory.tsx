import React, {useState} from "react";
//import CreateButton from '../../utils/createButton/createButton.tsx'
import './category.css'

interface CategoryInputPromts {
    addCategory: (category: string) => void
}

const CreateCategory: React.FC<CategoryInputPromts> = ({ addCategory }) => {
    const [category, setCategory] = useState<string>('');

    const handleAddCategory = () => {
        if (category.trim()) {
            addCategory(category);
            setCategory('');
        }
    };

    return (
        <div className="category-div">
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter the category"
            />
            <button onClick={handleAddCategory}>
              add
            </button>
        </div>
    );
};

export default CreateCategory;