import { connect } from 'react-redux';
import { createResponse, fetchResponse, updateResponse } from '../../actions/response_actions';
import ResponseInput from './response_input';


const mapStateToProps = (state, ownProps) => {
  let thisResponse;
  if(ownProps.thisResponse){
    // indicates if you're editing a preexisting comment
    thisResponse = ownProps.thisResponse;
    }
  return ({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    storyId: ownProps.storyId,
    inResponseId: ownProps.inResponseId,
    thisResponse: thisResponse
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createResponse: response => dispatch(createResponse(response)),
    fetchResponse: response => dispatch(fetchResponse(response)),
    updateResponse: response => dispatch(updateResponse(response))
    // receiveErrors: errors => dispatch(receiveErrors(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponseInput);
