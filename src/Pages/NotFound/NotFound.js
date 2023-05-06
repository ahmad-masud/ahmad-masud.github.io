import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className='not-found'>
      <p className='not-found-title'>404</p>
      <p className='not-found-sentence'>Looks like that page does not exist</p>
      <Link to='/' className='not-found-button'>Go Home</Link>
    </div>
  )
}

export default NotFound;
