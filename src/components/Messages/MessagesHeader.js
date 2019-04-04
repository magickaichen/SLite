import React, { Component } from 'react';
import { Segment, Header, Icon, Input } from 'semantic-ui-react';

class MessagesHeader extends Component {
  state = {  }
  render() {
    const { channelName, uniqueUsers, handleSearchChange, searchLoading } = this.props;
    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>
            {channelName}
            <Icon name={"star outline"} color="black" />
          </span>
          <Header.Subheader>
            <Icon name="users" fitted /> {uniqueUsers}
          </Header.Subheader>
        </Header>

        {/* Channel Search Input */}
        <Header floated="right">
          <Input 
            size="mini"
            icon="search"
            iconPosition="left"
            name="searchTerm"
            placeholder="Search Messages"
            onChange={handleSearchChange}
            loading={searchLoading}
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;