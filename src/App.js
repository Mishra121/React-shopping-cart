import React from 'react';

import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
  

  render(){
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="grid-container">
        <header>
          <Link to="/">React Shopping Cart</Link>
        </header>
        <main>
          <Route path="/admin" component={AdminScreen}/>
          <Route path="/" component={HomeScreen} exact/>
        </main>
        <footer>
          All right is reserved.
        </footer>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
