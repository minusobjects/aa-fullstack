import { connect } from 'react-redux';
import { fetchAllStories } from './../../actions/story_actions';
import Home from './home';


const mapStateToProps = (state) => {
  return({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    stories: Object.values(state.stories)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllStories: () => dispatch(fetchAllStories()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);