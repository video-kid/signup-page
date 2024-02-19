import React from 'react';

const LoginForm = () => {
  return (
    <div>
      <form>
        <label for='username'>Login:</label>
        <input
          type='text'
          id='username'
          name='username'
        />
        <label for='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
        />
      </form>
    </div>
  );
};

export default LoginForm;
