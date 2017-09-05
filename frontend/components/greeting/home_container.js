import { connect } from 'react-redux';
import { getFeatured } from '../../actions/search_actions';
import { resultsArray } from '../../reducers/selectors';
import Home from './home';

const mapStateToProps = (state) => ({
  featured: resultsArray(state.search.featured)
});

const mapDispatchToProps = dispatch => ({
  getFeatured: (num) => dispatch(getFeatured(num)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
