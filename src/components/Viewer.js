import React from 'react'
import { Segment, Image  } from 'semantic-ui-react'
import StackGrid, {transitions} from "react-stack-grid"

const { scaleDown } = transitions;

export default class Viewer extends React.Component {

  render(){
    return(
      <Segment size="massive" padded="very">
        <StackGrid
          columnWidth={"20%"}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
          gridRef={grid => this.grid = grid} >
            {this.props.bigImage[0] ? <Image src={this.props.bigImage[0]["url"]} onLoad={this.props.updateLayout}/> : null
            }
        </StackGrid>
      </Segment>
    )
  }
}
