import * as React from 'react';
import ReactDOM from 'react-dom/client';
import * as ReactRouter from 'react-router-dom'
import * as ReactQuery from 'react-query/devtools'

import * as App from 'App'
import * as GlobalStyle from 'components/abstract/Wrappers/GlobalStyle'
import * as QueryProvider from 'components/abstract/Wrappers/QueryProvider'
import * as ThemeProvider from 'components/abstract/Wrappers/ThemeProvider'
import * as Stores from 'store'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Stores.Provider store={Stores.Store}>
      <QueryProvider.Component>
        <ThemeProvider.Component>
          <ReactRouter.BrowserRouter>
            <GlobalStyle.Component />
            <App.Component />
            <ReactQuery.ReactQueryDevtools />
          </ReactRouter.BrowserRouter>
        </ThemeProvider.Component>
      </QueryProvider.Component>
    </Stores.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
