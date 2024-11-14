// store.ts
import { createStore, combineReducers } from 'redux';
import {basketReducer} from './basketReducer';
import addProductReducer from './reducer'
import {composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    basket: basketReducer,
    arr: addProductReducer
});

export const store = createStore(rootReducer,composeWithDevTools() );
export type RootState = ReturnType<typeof rootReducer>;

