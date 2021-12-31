import React from 'react';
import {BrowserRouter,Route, Router, Switch} from 'react-router-dom'
import { routes } from './routes/routes';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((route,i)=> (
          <Route key={i} {...route} />
        ))}
      </Switch>
      </React.Suspense>
    </Router>
    );

}


export default App;


