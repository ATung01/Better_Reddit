import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const Save = () => (
  <Button basic color="green" animated>
    <Button.Content visible>Save</Button.Content>
    <Button.Content hidden>
      <Icon name='save' />
    </Button.Content>
  </Button>
)

export default Save
