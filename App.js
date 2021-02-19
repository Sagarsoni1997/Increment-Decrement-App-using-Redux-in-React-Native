import React from 'react';
import CounterApp from './src/CounterApp';
// import Providers from './Navigation/index';
import {store} from './src/Store/Store';
import { Provider } from "react-redux";


const App = () => {
  return (
    <Provider store={store}>
        <CounterApp/>
    </Provider>
  )
}

export default App;