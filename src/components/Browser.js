import React from 'react'
import Tile from './Tile'
import StackGrid from "react-stack-grid"

export default class Browser extends React.Component {

  refresh = () => {
    this.grid.updateLayout()
  }

  render(){
    return(

      <StackGrid
        columnWidth={"20%"}
        gridRef={grid => this.grid = grid}
        onLoad={this.refresh} >
        {this.props.posts.map((post) => {
          return <Tile changeViewerState={this.props.changeViewerState} key={post.id} post={post} />
          })
        }
      </StackGrid>
    )
  }
}
