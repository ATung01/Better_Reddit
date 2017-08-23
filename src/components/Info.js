import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import Save from './Save'

const Info = (props) => {

  return (
    <Segment >
      <List divided relaxed>
        <List.Item>
          <List.Content>
            <List.Header>Title</List.Header>
            { props.selected['title'] }
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>Top Comment</List.Header>
            { props.selected['url'] }
          </List.Content>
        </List.Item>
        <List.Item>
          <Save addToStore={props.addToStore}/>
        </List.Item>
      </List>
    </Segment>
  )
}

export default Info
