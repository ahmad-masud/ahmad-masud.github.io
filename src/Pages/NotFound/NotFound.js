import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  useEffect(() => {
    document.title = '404 | Ahmad Masud';
  }, []);

  return (
    <div className="not-found">
      <p className="not-found-title">404</p>
      <p className="not-found-sentence">Looks like that page does not exist</p>
      <Link to="/" className="not-found-button">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
