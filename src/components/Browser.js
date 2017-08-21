import React from 'react'
import Tile from './Tile'
import StackGrid, {transitions} from "react-stack-grid"

const { scaleDown } = transitions;


export default class Browser extends React.Component {

  render(){
    return(

      <StackGrid
        columnWidth={"20%"}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
        gridRef={grid => this.grid = grid} >
        {this.props.posts.map((post) => {
          return <Tile changeViewerState={this.props.changeViewerState} key={post.id} post={post} updateLayout={this.props.updateLayout} />
          })
        }
      </StackGrid>
    )
  }
}
