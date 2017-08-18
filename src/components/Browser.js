import React from 'react'
import Tile from './Tile'
import StackGrid, {transitions} from "react-stack-grid"

const { scaleDown } = transitions;

export default class Browser extends React.Component {



  render(){
    return(

      <StackGrid
        columnWidth={"20%"} appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}>
        {
          this.props.images.map((image) => {
            if (image.viewer === false) {
              return <Tile changeViewerState={this.props.changeViewerState} image={image}/>
            }
          })
        }
      </StackGrid>
      );


  }
}





// <div>
// this is the browser
//

// </div>
