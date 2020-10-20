import React from 'react';
import styles from './styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Landing, Tours } from '../pages'

function App() {
  return (
    <styles.App>
    <BrowserRouter>
      <Switch>
        <Route path='/tours'>
          <Tours />
        </Route>
        
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
    </styles.App>
  );
}

export default App;
