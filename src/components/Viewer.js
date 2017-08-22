import React from 'react'
import { Segment, Image  } from 'semantic-ui-react'
import StackGrid, {transitions} from "react-stack-grid"

export default class Viewer extends React.Component {

  refresh = () => {
    this.grid.updateLayout()
  }

  render(){
    return(
      <Segment size="massive" padded="very">
        <StackGrid
          columnWidth={"20%"}
          gridRef={grid => this.grid = grid}
          onLoad={this.refresh} >
            {this.props.bigImage[0] ? <Image src={this.props.bigImage[0]["url"]} /> : null
            }
        </StackGrid>
      </Segment>
    )
  }
}
