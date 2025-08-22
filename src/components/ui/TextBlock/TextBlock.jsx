import styles from './TextBlock.module.css';

export default function TextBlock({ title, children }) {
  return (
    <div className={styles.textBlock}>
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{children}</p>
    </div>
  );
}
