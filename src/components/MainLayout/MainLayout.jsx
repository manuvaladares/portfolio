import styles from './MainLayout.module.css';

const MainLayout = ({ leftContent, rightContent }) => (
  <div className={styles.container}>
    <div className={styles.left}>{leftContent}</div>
    <div className={styles.right}>{rightContent}</div>
  </div>
);

export default MainLayout;
