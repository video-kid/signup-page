import Input from '../../../../components/Form/Input';
import styles from './Form.module.scss';
import buttonStyles from './Button.module.scss';

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <section>
        <Input
          label='Login'
          type='text'
          id='username'
          name='username'
        />
        <Input
          label='Password'
          type='password'
          id='password'
          name='password'
        />
      </section>
      <button
        type='submit'
        className={buttonStyles.button}>
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
