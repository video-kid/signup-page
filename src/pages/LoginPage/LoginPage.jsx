import React from 'react';
import styles from './LoginPage.module.scss';
import Blob from './components/Blob/Blob';
import LoginForm from './modules/Form/LoginForm';
import SigninForm from './modules/Form/SigninForm';
import { LoginPageTabs } from './modules/LoginPageTabs/LoginPageTabs';

const LoginPage = () => {
  const tabsObj = {
    tab1: {
      id: 'signup',
      label: 'Sign Up',
      panelContent: <SigninForm />,
    },
    tab2: {
      id: 'login',
      label: 'Login',
      panelContent: <LoginForm />,
    },
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.blobWrapper}>
        <Blob />
      </div>
      <div className={styles.formWrapper}>
        <LoginPageTabs
          tabsConfig={tabsObj}
          selectedTabKey='tab2'
        />
      </div>
    </div>
  );
};

export default LoginPage;
