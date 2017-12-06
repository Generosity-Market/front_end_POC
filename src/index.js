import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// additional imports from react-router-dom and redux
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import reduxThunk from 'redux-thunk';
// import reducers from './reducers/reducers';

// importing components and containers
import BaseLayout from './components/BaseLayout';
import Login from './components/Login';
import Campaign from './components/Campaign';
import CauseList from './components/CauseList';

// const store = createStore(
//     reducers,
//     compose(
//         applyMiddleware(reduxThunk)
//     )
// );

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/causes/:id' component={Campaign} />
        <Route path='/causes' component={CauseList} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
