import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {SEARCH_FIELDS} from '../components/search/consts';
import {SORT_FIELDS} from '../components/description/consts';
import Reducer from './reducer';
 import thunk from 'redux-thunk';

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

export default () => {
    let store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return { store, persistor };
}