import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import AlbumsReducer from './albums_reducer';
import LoadingReducer from './loadingReducer';
import TracksReducer from './audio_player_reducer';
import SearchReducer from './search_reducer';
import ArtistReducer from './artists_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  albums: AlbumsReducer,
  artists: ArtistReducer,
  loading: LoadingReducer,
  audio_player: TracksReducer,
  search: SearchReducer
});

export default RootReducer;
