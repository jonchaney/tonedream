import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import AlbumsReducer from './albums_reducer';
import LoadingReducer from './loading_reducer';
import TracksReducer from './audio_player_reducer';
import SearchReducer from './search_reducer';
import UserReducer from './users_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  albums: AlbumsReducer,
  loading: LoadingReducer,
  audio_player: TracksReducer,
  search: SearchReducer,
  selectedArtist: UserReducer
});

export default RootReducer;
