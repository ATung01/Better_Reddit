import React from 'react'
import { Grid } from 'semantic-ui-react'
import BigPicture from './BigPicture'
import Info from './Info'

export default class Viewer extends React.Component {

  render(){
    return(
      <Grid>
        <Grid.Column width={10}>
          <BigPicture selected={this.props.selected[0]} />
        </Grid.Column>
        <Grid.Column width={5}>
          <Info selected={this.props.selected[0]}/>
        </Grid.Column>
      </Grid>
    )
  }
}
