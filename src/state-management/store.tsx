import {
    legacy_createStore as createStore, 
    applyMiddleware} from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from './reducers/root-reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: "root",
    storage:AsyncStorage,
    middleware: [thunk],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
