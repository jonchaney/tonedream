import { connect } from 'react-redux';
import { getFeatured } from '../../actions/search_actions';
import { indexLoaded } from '../../actions/loadingActions';

import { resultsArray } from '../../reducers/selectors';
import { selectAllTracks } from '../../reducers/selectors';

import FeaturedArtists from './featuredArtists.js';

const mapStateToProps = (state) => ({
  featured: resultsArray(state.search.featured),
  loading: state.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  getFeatured: (num) => dispatch(getFeatured(num))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedArtists);
