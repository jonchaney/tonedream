import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { withRouter } from 'react-router';

import { fetchArtists } from '../../actions/artist_actions';
import { selectAllArtists } from '../../reducers/selectors';

const mapStateToProps = ({ session, artists }) => ({
  currentUser: session.currentUser,
  artists: selectAllArtists(artists),
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex));