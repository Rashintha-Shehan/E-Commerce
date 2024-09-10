import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../Component/Title';
import ProductItem from '../Component/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext); 
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [Category, setCategory] = useState([]);

  const toggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (Category.length > 0) {
      productsCopy = productsCopy.filter(item => 
        Category.includes(item.category)  
      );
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    if (Array.isArray(products)) {
      setFilterProducts(products); 
    }
  }, [products]);

  useEffect(() => {
    applyFilter(); 
  }, [Category]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Option */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="Dropdown icon" />
        {/* Category Filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'LowMaintain'} onChange={toggleCategory} /> Low Maintain
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'HighMaintain'} onChange={toggleCategory} /> High Maintain
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'AirCleaner'} onChange={toggleCategory} /> Air Cleaner
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'IndoorPlant'} onChange={toggleCategory} /> Indoor Plant
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'PetFriendly'} onChange={toggleCategory} /> Pet Friendly
            </p>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {Array.isArray(filterProducts) && filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              <ProductItem 
                key={item._id} 
                id={item._id} 
                name={item.name} 
                image={item.image} 
                price={item.price} 
              />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
