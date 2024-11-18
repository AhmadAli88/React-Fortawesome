import { useState } from 'react';

import './App.css';
import Basic from './components/Basic';
import AddedToLibrary from './components/Icons added to library';
import DifferentStyles from './components/Different Icon Styles';
import Customize from './components/Customizing Icon';
import IconGallery from './components/IconGallery';

function App() {
  return (
    <div>
      <Basic />
      <AddedToLibrary/>
      <DifferentStyles/>
      <Customize/>
      <IconGallery/>
    </div>
  );
}

export default App;
