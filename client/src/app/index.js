import React from 'react';
import styles from './styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Pages from '../pages'

function App() {
  return (
    <styles.App>
    <BrowserRouter>
      <Switch>
        <Route path='/tours/:id'>
          <Pages.Tour />
        </Route>

        <Route path='/tours'>
          <Pages.Tours />
        </Route>
        
        <Route path='/'>
          <Pages.Landing />
        </Route>
      </Switch>
    </BrowserRouter>
    </styles.App>
  );
}

export default App;
