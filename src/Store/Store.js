import { createStore } from 'redux';
import { mainReducer } from '../Reducers/Reducer';


export const store = createStore(mainReducer);