import React from 'react';
import { assets } from '../assets/assets'; 

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-8 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className='flex flex-col items-center'>
        <img src={assets.exchange_icon} className='w-12 mb-2' alt="Exchange Policy Icon" />
        <p className='font-semibold mb-1'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer a hassle-free exchange policy.</p>
      </div>

      <div className='flex flex-col items-center'>
        <img src={assets.quality_icon} className='w-12 mb-2' alt="Quality Icon" />
        <p className='font-semibold mb-1'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide a 7-day free return policy.</p>
      </div>

      <div className='flex flex-col items-center'>
        <img src={assets.support_img} className='w-12 mb-2' alt="Customer Support Icon" />
        <p className='font-semibold mb-1'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 customer support.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
