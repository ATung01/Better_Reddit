import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const Info = (props) => {

  return (
    <Segment inverted centered>
      <List divided inverted relaxed>
        <List.Item>
          <List.Content>
            <List.Header>Title</List.Header>
            { props.selected['title'] }
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>URL</List.Header>
            { props.selected['url'] }
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  )
}

export default Info
