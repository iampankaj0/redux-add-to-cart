import React from 'react';
import { Provider } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import store from './store/store';

const App = () => {
  return (
    <div className='main-app_component'>

      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cart' component={Cart} />
          </Switch>
          <Redirect to='/' />
        </Router>
      </Provider>


    </div>
  )
}

export default App