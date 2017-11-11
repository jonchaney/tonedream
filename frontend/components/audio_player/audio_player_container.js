import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  receiveAlbum
} from '../../actions/album_actions';

import {
  fetchSelectedTrack
} from '../../actions/track_actions';

import { selectAllTracks } from '../../reducers/selectors';

import AudioPlayer from './audio_player';

const mapStateToProps = ({ albums, session, audio_player, selectedArtist }) => {
  return {
    selectedAlbum: albums.selectedAlbum,
    selectedTrack: audio_player.selectedTrack,
    tracks: selectAllTracks(albums.selectedAlbum.tracks),
    selectedArtist: selectedArtist
  };
};

const mapDispatchToProps = dispatch => ({
  receiveAlbum: (album) => dispatch(receiveAlbum(album)),
  fetchSelectedTrack: (track) => dispatch(fetchSelectedTrack(track))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer));