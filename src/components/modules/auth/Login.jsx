import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      navigate('/dashboard');
    }
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();

    login(email, password)
      .then(({ data }) => {
        localStorage.setItem('authToken', data.data.name);
        navigate('/dashboard');
      })
      .catch((err) => {
        setError(err.response.data.message);
        setTimeout(() => {
          setError('');
        }, 5000);
      });
  };

  return (
    <div>
      <form onSubmit={loginHandler}>
        <h3>Login</h3>
        {error && <span>{error}</span>}
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            required
            id='email'
            placeholder='Email address'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            required
            id='password'
            autoComplete='true'
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type='submit' tabIndex={3}>
          Login
        </button>

        <br />

        <span>
          Don't have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};
