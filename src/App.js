import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Links from './Links/Links';
import Header from './Main-page/header';
import CoffeePage from './Coffee-page/header';
import GoodsPage from './Goods page/header';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <Route path="/" exact component={Header}/>
              <Route path="/our-coffee" exact component={CoffeePage}/>
              <Route path="/goods-page" exact component={GoodsPage}/>
          </BrowserRouter>
      )
  }
}

export default App;
