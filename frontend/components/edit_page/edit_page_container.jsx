import { connect } from 'react-redux';

import EditPage from './edit_page';

import { fetchArtists, fetchArtist, clearArtist } from '../../actions/artist_actions';
import { selectAllArtists } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  artists: selectAllArtists(state.artists),
  selectedArtist: state.artists.selectedArtist
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  clearArtist: (id) => dispatch(clearArtist()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
