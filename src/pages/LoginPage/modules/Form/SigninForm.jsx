import styles from './Form.module.scss';

const SigninForm = () => {
  return (
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
          for='email'
          className={styles.label}>
          Email:
        </label>
        <input
          className={styles.inputText}
          type='email'
          id='email'
          name='email'
        />
      </div>
    </form>
  );
};

export default SigninForm;
