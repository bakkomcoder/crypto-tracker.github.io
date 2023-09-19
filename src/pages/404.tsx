import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <h1>Oops!</h1>
      <span>Sorry, unexpected error has occured</span>
      <Link to={'/'}>Back to Home</Link>
    </>
  );
};

export default ErrorPage;
