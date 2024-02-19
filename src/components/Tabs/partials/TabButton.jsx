import styles from '../Tabs.module.scss';

const TabButton = ({ active = false, children, label, ...props }) => {
  return (
    <div
      role='tab'
      aria-selected={active}
      aria-controls={label}
      id={label}
      className={styles.button}
      {...props}>
      {children}
    </div>
  );
};

export default TabButton;
