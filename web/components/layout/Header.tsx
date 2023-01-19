import { SERVICES_LIST } from '@constants/dataMock';
import styles from '@styles/layout.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <aside className={styles.centerHeader}>
        <div className="flex text-white mx-2">
          {SERVICES_LIST.map((item, index) => (
            <button key={index} className={`${styles.inlineButton} mx-2  px-2 `}>
              {item.title}
            </button>
          ))}
        </div>
        <button className={`${styles.outlineButton} mx-8  px-2 `}>Sign out</button>
      </aside>
    </header>
  );
};

export default Header;
