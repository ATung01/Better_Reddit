import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class Tile extends React.Component {

  handleClick = (event) => {
    // console.log(this.props)
    this.props.changeViewerState(event)
  }

  render(){
    return(
      <div>
         <Card>
           <Image src={this.props.image.url} onClick={this.handleClick} key={this.props.key}/>


         </Card>
      </div>
    )
  }
}
