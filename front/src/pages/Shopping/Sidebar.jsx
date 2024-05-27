import React from 'react';
import './Sidebar.css';

const Sidebar = ({ category, onFilter }) => {
  const handleFilter = (subcategory) => {
    onFilter(subcategory);
  };

  return (
    <div className="sidebar">
      <h3>Filter by Subcategory</h3>
      <ul>
        <li onClick={() => handleFilter('Skincare')}>Skincare</li>
        <li onClick={() => handleFilter('Haircare')}>Haircare</li>
        <li onClick={() => handleFilter('Fragrance')}>Fragrance</li>
        <li onClick={() => handleFilter('Bodycare')}>Bodycare</li>
      </ul>
    </div>
  );
};

export default Sidebar;
