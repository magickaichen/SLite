import React, { Component } from "react";
import { Grid, Header, Icon, Dropdown, Image } from "semantic-ui-react";

import firebase from "../../firebase";

class UserPanel extends Component {
  state = {
    user: this.props.currentUser
  };

  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <b>{this.state.user.displayName}</b>
        </span>
      ),
      disabled: true
    },
    {
      key: "avatar",
      text: <span>Change Avatar</span>
    },
    {
      key: "signout",
      text: <span onClick={this.handleSignout}>Sign Out</span> 
    }
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("Signed Out."));
  };
  render() {
    console.log(this.props.currentUser);
    const { user } = this.state;
    return (
      <Grid style={{ background: "#4c3c4c" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            {/* App Header */}
            <Header as="h2" inverted floated="left">
              <Icon name="code" />
              <Header.Content>DevChat</Header.Content>
            </Header>
            {/* User Dropdown */}
            <Header as="h4" inverted style={{ padding: "0.25em" }}>
              <Dropdown
                trigger={
                  <span>
                    <Image src={user.photoURL} spaced="right" avatar />
                    {user.displayName}
                  </span>
                }
                options={this.dropdownOptions()}
              />
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
