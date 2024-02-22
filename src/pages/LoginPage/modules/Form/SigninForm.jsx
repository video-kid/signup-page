import Input from '../../../../components/Form/Input';
import styles from './Form.module.scss';
import buttonStyles from './Button.module.scss';

const SigninForm = () => {
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
          label='Mail'
          type='email'
          id='email'
          name='email'
        />
      </section>
      <button
        type='submit'
        className={buttonStyles.button}>
        Sign in
      </button>
    </form>
  );
};

export default SigninForm;
