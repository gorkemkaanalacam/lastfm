import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';
import fetchTopArtistsReducers from './reducers/fetchTopArtistsReducers';
import fetchTopAlbumsReducers from './reducers/fetchTopAlbumsReducers';
import fetchTopTracksReducers from './reducers/fetchTopTracksReducers';
import themeReducer from './reducers/themeReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    topArtists: fetchTopArtistsReducers,
    topAlbums: fetchTopAlbumsReducers,
    topTracks: fetchTopTracksReducers,
    theme: themeReducer
});

const composeEnhancers = compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)),
);

export default store;