import React from 'react';

import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart.js';

import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
  

  render(){
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter 
              />
              <Products   />
            </div>
            
            <div className="sidebar">
              <Cart 
              />
            </div>
          </div>
        </main>
        <footer>
          All right is reserved.
        </footer>
      </div>
      </Provider>
    );
  }
}

export default App;
