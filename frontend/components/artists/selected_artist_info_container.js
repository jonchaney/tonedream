import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions';
import { selectAllArtistsIds } from '../../reducers/selectors';

import SelectedArtistInfo from './selected_artist_info';

import { withRouter } from 'react-router';

const mapStateToProps = ({ albums, session, loading, artists }) => ({
  selectedArtist: artists.selectedArtist,
  currentUser: session.currentUser,
  artists: selectAllArtistsIds(artists),
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedArtistInfo));
