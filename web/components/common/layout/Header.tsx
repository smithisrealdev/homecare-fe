import styles from '@styles/Layout.module.css';
import { FaNapster, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <aside className={styles.rightHeader}>
        <div className="flex text-white mt-1 mx-2">
          <FaNapster className="text-[36px]" />
        </div>
        <div className="flex flex-col ">
          <span>Nong Gig</span>
          <span>gigryjung@gmail.com</span>
        </div>
        <button className="ml-4 border rounded border-white px-2 hover:bg-pink-mauvelous">
          <FaSignOutAlt />
        </button>
      </aside>
    </header>
  );
};

export default Header;
