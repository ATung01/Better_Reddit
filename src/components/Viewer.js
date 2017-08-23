import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import BigPicture from './BigPicture'
import Info from './Info'
import Store from './Store'

export default class Viewer extends React.Component {

  splashIfNoneSelected = (selected) => {
    if (Object.keys(this.props.selected).length === 0) {
      return <p>Select Photo Below to View</p>
    }
    else {
      return (
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <BigPicture selected={selected} />
            </Grid.Column>
            <Grid.Column width={5}>
              <Info selected={selected} addToStore={this.props.addToStore} />
              <Store />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  }

  render(){
    return(
      <Segment>
        {this.splashIfNoneSelected(this.props.selected)}
      </Segment>
    )
  }
}
