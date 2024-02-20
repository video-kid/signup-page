import styles from './Form.module.scss';

const LoginForm = () => {
  return (
    <div>
      <form className={styles.form}>
        <div className={styles.field}>
          <label
            for='username'
            className={styles.label}>
            Login:
          </label>
          <input
            className={styles.inputText}
            type='text'
            id='username'
            name='username'
          />
        </div>
        <div className={styles.field}>
          <label
            for='password'
            className={styles.label}>
            Password:
          </label>
          <input
            className={styles.inputText}
            type='password'
            id='password'
            name='password'
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
