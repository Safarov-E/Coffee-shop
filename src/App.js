import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Main-page/header';
import CoffeePage from './Coffee-page/header';
import GoodsPage from './Goods page/header';
import AboutIt from './AboutIt/AboutIt';
import AboutIt_2 from './AboutIt/AboutIt-2/AboutIt';
import AboutIt_3 from './AboutIt/AboutIt-3/AboutIt';
import AboutIt_4 from './AboutIt/AboutIt-4/AboutIt';
import AboutIt_5 from './AboutIt/AboutIt-5/AboutIt';
import AboutIt_6 from './AboutIt/AboutIt-6/AboutIt';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <Route path="/" exact component={Header}/>
              <Route path="/our-coffee" exact component={CoffeePage}/>
              <Route path="/goods-page" exact component={GoodsPage}/>
              <Route path="/our-coffee/0" exact component={AboutIt}/>
              <Route path="/our-coffee/1" exact component={AboutIt_2}/>
              <Route path="/our-coffee/2" exact component={AboutIt_3}/>
              <Route path="/our-coffee/3" exact component={AboutIt_4}/>
              <Route path="/our-coffee/4" exact component={AboutIt_5}/>
              <Route path="/our-coffee/5" exact component={AboutIt_6}/>
          </BrowserRouter>
      )
  }
}

export default App;
