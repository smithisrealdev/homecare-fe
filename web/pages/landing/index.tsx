import React from 'react';
import styles from '@/styles/landing.module.css';
import Card from '@components/common/card';
import Services from '@components/landing/Services';
const Landing = () => {
 
  return (
    <div>
      <div className={`${styles.title} mt-6 px-2 items-center flex flex-row py-2 px-2`}>Home care services</div>

      <Services />
    </div>
  );
};

export default Landing;
