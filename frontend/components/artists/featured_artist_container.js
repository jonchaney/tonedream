import { connect } from 'react-redux';
import { getFeatured } from '../../actions/search_actions';
import { resultsArray } from '../../reducers/selectors';
import FeaturedArtist from './featured_artist';

const mapStateToProps = (state) => ({
  featured: resultsArray(state.search.featured),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getFeatured: (num) => dispatch(getFeatured(num)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedArtist);
