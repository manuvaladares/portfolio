import styles from './Button.module.css';


const Button = ({ children, onClick, type = 'button', className = '' }) => (
  <button
    className={`${styles.button} ${className}`.trim()}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;
