import React from 'react';

const RestaurantMenu = ({ menu }) => {
  return (
    <div>
      <h2>Restaurant Menu</h2>
      {menu.map(section => (
        <div key={section.category}>
          <h3>{section.category}</h3>
          <ul>
            {section.dishes.map((dish, index) => (
              <li key={index}>
                <strong>{dish.name}</strong> – Ingredients: {dish.ingredients.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;