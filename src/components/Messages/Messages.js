import React, { Component } from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import MessagesHeader from './MessagesHeader';
import MessagesForm from './MessagesForm';

class Messages extends Component {
  state = {  }
  render() {
    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment>
          <Comment.Group className="messages">
            {/* Messages Here */}
            <p>hi</p>
          </Comment.Group>
        </Segment>

        <MessagesForm />
      </React.Fragment>
    );
  }
}

export default Messages;