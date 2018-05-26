import {createStore, combineReducers, applyMiddleware} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {SEARCH_FIELDS} from '../components/search/consts';
import {SORT_FIELDS} from '../components/description/consts';
import Reducer from './reducer';
import thunk from 'redux-thunk';
import {routerReducer} from 'react-router-redux'

const persistConfig = {
    key: 'root',
    storage,
}

const initialState = {
    films: [],
    selectedFilm: null,
    searchValue: null,
    searchField: SEARCH_FIELDS.title.name,
    sortField: SORT_FIELDS.release.name,
};

const persistedReducer = persistReducer(persistConfig, Reducer);
const reducers = [persistedReducer];
export default () => {
    let store = createStore(combineReducers({reducers, routing: routerReducer}), initialState, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return {store, persistor};
}