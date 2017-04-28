import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './app';

import AuthFormContainer from './auth_form/auth_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import StoryInputContainer from './story_input/story_input_container';
import StoryContainer from './story/story_container';
import UserProfileContainer from './user_profile/user_profile_container';
import HomeContainer from './home/home_container';

// need to route signin and signup for topics - think i need to add 'children' to nav as well.

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/signin" component={AuthFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
      </Route>
      <Route path="/topics/:id" component={HomeContainer}>
        <Route path="/topics/:id/signin" component={AuthFormContainer} />
        <Route path="/topics/:id/signup" component={SignupFormContainer} />
      </Route>
      <Route path="/write" component={StoryInputContainer} />
      <Route path="/stories/:id" component={StoryContainer}>
        <Route path="/stories/:id/signin" component={AuthFormContainer} />
        <Route path="/stories/:id/signup" component={SignupFormContainer} />
      </Route>
      <Route path="/stories/:id/edit" component={StoryInputContainer} />
      <Route path="/users/:id" component={UserProfileContainer}>
        <Route path="/users/:id/signin" component={AuthFormContainer} />
        <Route path="/users/:id/signup" component={SignupFormContainer} />
      </Route>

    </Router>
  </Provider>
);

export default Root;


// <IndexRoute component={EventIndexContainer} />
// <Route path="/events/new" component={EventFormContainer} />
// <Route path="/events" component={EventIndexContainer} />
// <Route path="/events/:eventId" component={EventShowContainer} />
// <Route path="/events/:eventId/edit" component={EventFormContainer} />
