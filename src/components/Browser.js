import React from 'react'
import Tile from './Tile'
import StackGrid from "react-stack-grid"
import { Button } from 'semantic-ui-react'



export default class Browser extends React.Component {

  refresh = () => {
    this.grid.updateLayout()
  }




  render(){
    return(

        <StackGrid
          columnWidth={375}
          gridRef={grid => this.grid = grid}
          onLoad={this.refresh} >


      {this.props.posts.map((post) => {
        return <Tile changeViewerState={this.props.changeViewerState} key={post.post_id} post={post} />
        })
      }
      <Button class="ui button" role="button" onClick={this.props.morePosts}>Click Here to get more posts</Button>
        </StackGrid>




    )
  }
}
