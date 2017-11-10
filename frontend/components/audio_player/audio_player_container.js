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

const mapStateToProps = ({ albums, session, tracks, selectedArtist }) => {
  return {
    selectedAlbum: albums.selectedAlbum,
    selectedTrack: tracks.selectedTrack,
    tracks: selectAllTracks(albums.selectedAlbum.tracks),
    selectedArtist: selectedArtist.artist
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