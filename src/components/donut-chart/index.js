import React from 'react';

import titleUnit from './titleUnit';
import chartUnit from './chartUnit';

import titlePrice from './titlePrice';
import chartPrice from './chartPrice';


export default () => {
  return (
    <React.Fragment>

      <Titleunit />
      <Chartunit />

      <Titleprice />
      <chartPrice />

    </React.Fragment>
  );
};
