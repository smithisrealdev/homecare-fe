import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div>
      <div className={`${styles.title} mt-10 px-2 items-center`}>
        Hello! Home care services <FaHeartbeat className="px-2 text-[80px]" />
      </div>
      <div className={`${styles.subTitle}`}>This is a landing page ka</div>
    </div>
  );
};

export default Landing;
