import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const HomePage = () => {
  const {auth} = useAuth();
  console.log(auth);
  return (
    <div>
     
      HomePage
      <Link to="/me">
      go to profile
      </Link>

      </div>
  )
}

export default HomePage