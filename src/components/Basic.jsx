import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Basic = () => {
  return (
    <div>
      <h1>Welcome to FontAwesome</h1>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
};

export default Basic;
