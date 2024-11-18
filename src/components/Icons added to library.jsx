import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faCoffee, faHome);

const AddedToLibrary = () => {
  return (
    <div>
      <h1>FontAwesome with React</h1>
      <FontAwesomeIcon icon="coffee" />
      <FontAwesomeIcon icon="home" />
    </div>
  );
};

export default AddedToLibrary;
