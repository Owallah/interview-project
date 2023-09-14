import React, { useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { Button } from '@mui/material';



const ProductItem = ({ item, onDelete}) => {
    const [productCount, setProductCount] = useState(0);
    const [isSaved, setIsSaved] = useState(false);

    // this section handles incrementing and decrementing. it also checks to ensure we do not decrement beyond 0.
  const handleCountDecrement = () => {
    if (productCount === 0) {
      return;
    }
    setProductCount((previousCount) => previousCount - 1);
  };

  const handleCountIncrement = () => {
    setProductCount((previousCount) => previousCount + 1);
  };
// this function handles when the delete button is clicked.
// the function calls the onDelete function which is declared in the parent component.
  const handleProductDelete = () => {
    onDelete()
    alert(`${item.id} deleted`)
  };

  //This function handles saving. When the save button is clicked, an alert is given.
  const handleProductSave = () => {
    setIsSaved(true)
    alert(`${item.id} saved`);
  };

  return (
    <div className="product-item">
      <div className="image-section">
        <img src={item.image} alt={item.description} />
      </div>
      <div className="text-section">
        <div className="item-description">{item.description}</div>
        <div className="item-info">
          <p>Price: kes{item.price}</p>
          <p>Color: {item.color}</p>
          <p id='item_status'>{item.status}</p>
        </div>
        <div className="increment-section">
          <button className='increment' onClick={handleCountDecrement}>-</button>
          <p>{productCount}</p>
          <button className='decrement' onClick={handleCountIncrement}>+</button>
        </div>
      </div>

      
      <div className="buttons-section">
        <Button onClick={handleProductDelete} variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />}>
        Delete
      </Button>
      <Button onClick={handleProductSave} variant="outlined" startIcon={<BookmarkBorderOutlinedIcon />}>
        Save
      </Button>
      </div>
    </div>
  );
};

export default ProductItem;
