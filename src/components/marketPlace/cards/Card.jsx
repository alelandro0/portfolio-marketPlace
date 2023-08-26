import React, { useState } from "react";

const Card = ({ product, addItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddItem = () => {
    addItem(product);
    setIsAdded(true);
  };

  const isProductAdded = addedItems.some((addedItem) => addedItem.id === product.id);

  return (
    <div className="border border-gray-300 rounded overflow-hidden mx-4 my-6 max-w-xs h-[400px] relative">
      <img className="w-full h-40 object-contain mx-auto my-4" src={product.image} alt="" />
      <button
        className={`absolute top-0 m-8 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 cursor-pointer text-4xl font-bold `}
        style={{ maxWidth: "90%", maxHeight: "90%" }}
        onClick={handleAddItem}
        disabled={isAdded || isProductAdded}
      >
        +
      </button>
      <div className="p-4 h-[50%] flex flex-col justify-between">
        <div className="flex flex-col h-full">
          <h2 className="text-lg font-semibold">{product.category}</h2>
          <h4 className="text-md">{product.title}</h4>
          <div className="overflow-hidden flex-grow">
            <p className="text-sm text-justify">{product.description}</p>
          </div>
          <div className="mt-2 text-right">
            <span className="text-gray-600 font-bold">
              Price: <span>${product.price}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;








