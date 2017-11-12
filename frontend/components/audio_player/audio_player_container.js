import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  receiveAlbum
} from '../../actions/album_actions';

import {
  fetchSelectedTrack,
  playTrack,
  pauseTrack
} from '../../actions/audio_player_actions';

import { selectAllTracks } from '../../reducers/selectors';

import AudioPlayer from './audio_player';

const mapStateToProps = ({ albums, session, audio_player, selectedArtist }) => {
  return {
    selectedAlbum: audio_player.selectedAlbum,
    selectedTrack: audio_player.selectedTrack,
    tracks: selectAllTracks(albums.selectedAlbum.tracks),
    selectedArtist: audio_player.selectedArtist,
    playing: audio_player.trackStatus.playing
  };
};

const mapDispatchToProps = dispatch => ({
  receiveAlbum: (album) => dispatch(receiveAlbum(album)),
  fetchSelectedTrack: (track) => dispatch(fetchSelectedTrack(track)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer));