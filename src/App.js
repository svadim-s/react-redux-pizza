import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import {useDispatch} from "react-redux";

import { Header } from './components';
import { Home, Cart, Authorization, Registration } from './pages';
import {auth} from './redux/actions/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(auth())
  }, [dispatch]);

  return (
    <div className="wrapper">
    <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/authorization" component={Authorization} exact/>
        <Route path="/registration" component={Registration} exact/>
      </div>
    </div>
  )
}

export default App;