import React from 'react';

const SigninForm = () => {
  return (
    <form>
      <label for='username'>Login:</label>
      <input
        type='text'
        id='username'
        name='username'
      />
      <label for='email'>Email:</label>
      <input
        type='email'
        id='email'
        name='email'
      />
    </form>
  );
};

export default SigninForm;
