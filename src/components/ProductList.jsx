import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const dummyData = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Apowery Solar Panel Kit 12V Monocrystalline, Battery Maintainer +10A Solar Charger...',
        price: '180,255',
        color: 'Black',
        status: 'In stock',
        image: 'https://suitable-homes.com/wp-content/uploads/2021/03/jinko-2-4.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Solar Panel Kit 12V Monocrystalline, Battery Maintainer...',
        price: '180,255',
        color: 'Black',
        status: 'In stock',
        image: 'https://suitable-homes.com/wp-content/uploads/2021/03/jinko-2-4.jpg',
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Apowery Solar Panel Kit 12V Monocrystalline, Battery Maintainer +10A Solar Charger...',
        price: '180,255',
        color: 'Black',
        status: 'In stock',
        image: 'https://suitable-homes.com/wp-content/uploads/2021/03/jinko-2-4.jpg',
      },
    ];

    setProducts(dummyData);
  }, []);

  const handleProductDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="product-list">
      <h5>My Cart</h5>
      <ul className="product-items">
        {products.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
            onDelete={() => handleProductDelete(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
