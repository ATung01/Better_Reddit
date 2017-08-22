import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const Info = (props) => {

  const handleEmpty = (item, key) => item ? props.selected[key] : "nothing selected"

  return (
    <Segment inverted centered>
      <List divided inverted relaxed>
        <List.Item>
          <List.Content>
            <List.Header>Title</List.Header>
            {handleEmpty(props.selected, 'title')}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>URL</List.Header>
            {handleEmpty(props.selected, 'url')}
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  )
}

export default Info
