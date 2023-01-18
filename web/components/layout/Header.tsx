import styles from '@styles/layout.module.css';

const Header = () => {
  const feature = ['feature', 'feature', 'feature', 'feature', 'feature', 'feature'];
  return (
    <header className={styles.header}>
      <aside className={styles.centerHeader}>
        <div className="flex text-white mx-2">
          {feature.map((item, index) => (
            <button key={index} className={`${styles.inlineButton} ml-4  px-2 `}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-col "></div>
        <button className={`${styles.outlineButton} ml-24  px-2 `}>Sign out</button>
      </aside>
    </header>
  );
};

export default Header;
