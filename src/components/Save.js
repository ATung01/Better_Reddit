import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const Save = (props) => {

  const handleClick = (event) => props.addToStore()

  return (
    <Button onClick={handleClick} basic color="blue" animated>
      <Button.Content visible>Save</Button.Content>
      <Button.Content hidden>
        <Icon name='save' />
      </Button.Content>
    </Button>
  )
}

export default Save
