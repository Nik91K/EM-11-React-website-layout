import React from 'react';
import './category.css'

interface CategoryListProps {
  categorys: string[];
  removeCategory: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categorys, removeCategory }) => {
  return (
    <ul>
      {categorys.map((category, index) => (
        <li key={index} className='category-list'>
          {category}
          <button
            className='delete-button'
            onClick={() => removeCategory(category)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;