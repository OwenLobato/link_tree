import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to='/'>Retun to index</Link>
      </div>
    </div>
  );
};
