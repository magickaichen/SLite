import React, { Component } from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';

class MessagesForm extends Component {
  state = {  }
  render() {
    return (
      <Segment className="message__form">
        <Input 
          fluid
          name="message"
          style={{marginButtom: '0.7em'}}
          label={<Button icon="add" />}
          labelPosition="left"
          placeholder="Your messages"
        />
        <Button.Group icon widths="2">
          <Button 
            color="orange"
            content="Add Reply"
            labelPosition="left"
            icon="edit"
          />
          <Button 
            color="teal"
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
          />
        </Button.Group>
      </Segment>
    );
  }
}

export default MessagesForm;