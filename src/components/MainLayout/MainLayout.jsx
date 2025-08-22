import Navigation from '../navigation/navigation';
import styles from './MainLayout.module.css';

const MainLayout = ({ leftContent }) => (
  <div className={styles.container}>
    <div className={styles.left}>{leftContent}
      <Navigation />
    </div>
    <div className={styles.right}></div>
  </div>
);

export default MainLayout;
