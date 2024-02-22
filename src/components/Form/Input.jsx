import styles from './Input.module.scss';

const Input = ({ type = 'text', id, name, label }) => {
  return (
    <div className={styles.field}>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        placeholder=''
      />
      <label
        for={id}
        className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Input;
