import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  receiveAlbum
} from '../../actions/album_actions';

import {
  fetchSelectedTrack,
  playTrack,
  pauseTrack,
  muteTrack,
  shuffle,
  loopSong,
  loopAlbum,
  receiveTrack,
  clearTrack
} from '../../actions/audio_player_actions';

import { selectAllTracks } from '../../reducers/selectors';

import AudioPlayer from './audio_player';

const mapStateToProps = ({ albums, session, audio_player, selectedArtist }) => {
  return {
    selectedAlbum: audio_player.selectedAlbum,
    selectedTrack: audio_player.selectedTrack,
    tracks: selectAllTracks(audio_player.selectedAlbum.tracks),
    selectedArtist: audio_player.selectedArtist,
    playing: audio_player.trackStatus.playing,
    loopedSong: audio_player.trackStatus.loopSong,
    loopedAlbum: audio_player.trackStatus.loopAlbum,
    shuffled: audio_player.trackStatus.shuffle,
    mute: audio_player.trackStatus.mute,
  };
};

const mapDispatchToProps = dispatch => ({
  receiveAlbum: (album) => dispatch(receiveAlbum(album)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  muteTrack: () => dispatch(muteTrack()),
  loopSong: () => dispatch(loopSong()),
  loopAlbum: () => dispatch(loopAlbum()),
  shuffle: () => dispatch(shuffle()),
  clearTrack: () => dispatch(clearTrack()),
  receiveTrack: (track) => dispatch(receiveTrack(track)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer));