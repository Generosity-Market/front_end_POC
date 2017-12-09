import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// additional imports from react-router-dom and redux
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import reduxThunk from 'redux-thunk';
// import reducers from './reducers/reducers';

// importing components and containers
import Home from './components/Home/Home';
import BaseLayout from './components/BaseLayout/BaseLayout';
import Login from './components/Login/Login';
import Campaign from './components/Campaign/Campaign';
import CauseList from './components/CauseList/CauseList';
import AddCampaign from './components/AddCampaign/AddCampaign';

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
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route exact path='/causes/:id' component={Campaign} />
        <Route path='/causes' component={CauseList} />
        <Route path='/AddCampaign' component={AddCampaign} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
