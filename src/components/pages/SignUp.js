import React, { useState } from 'react';
import '../sign_upFunc.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [error, setError] = useState(null);

  const history = useNavigate();
  const auth = getAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, currentPassword);
      const user = userCredential.user;
      console.log('User signed up:', user);
      
      setError(null);

    } catch (error) {
      // Handle specific error cases
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use. Please use a different email.');
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className='sign-up'>
      <h1 id="signup_label">Sign Up</h1>
      <form onSubmit={handleSignUp}>

        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='currentPassword'>Current Password:</label>
        <input
          type='password'
          id='currentPassword'
          name='currentPassword'
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <label htmlFor='confirmedPassword'>Confirm Password:</label>
        <input
          type='password'
          id='confirmedPassword'
          name='confirmedPassword'
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}/>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button id="signup_btn" type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;