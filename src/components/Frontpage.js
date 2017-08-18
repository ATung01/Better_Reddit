import React from 'react'
import Browser from './Browser'
import Viewer from './Viewer'

export default class Frontpage extends React.Component {
  state = {
    images: [ {url: "http://i.imgur.com/eYLsvQX.png", viewer: false}, {url: "http://i.imgur.com/ePkUDjL.jpg", viewer: false}, {url: "http://i.imgur.com/TnFqoGk.jpg", viewer: false}, {url: "http://i.imgur.com/XzhZ4XS.jpg", viewer: false},
              {url: "http://i.imgur.com/Z0srapE.jpg", viewer: false}, {url: "http://i.imgur.com/IRKO1rk.jpg", viewer: false}, {url: "http://i.imgur.com/eYLsvQX.png", viewer: false}, {url: "http://i.imgur.com/ePkUDjL.jpg", viewer: false}, {url: "http://i.imgur.com/TnFqoGk.jpg", viewer: false}, {url: "http://i.imgur.com/XzhZ4XS.jpg", viewer: false},
              {url: "http://i.imgur.com/Z0srapE.jpg", viewer: false}, {url: "http://i.imgur.com/IRKO1rk.jpg", viewer: false}, {url: "http://i.imgur.com/eYLsvQX.png", viewer: false}, {url: "http://i.imgur.com/ePkUDjL.jpg", viewer: false}, {url: "http://i.imgur.com/TnFqoGk.jpg", viewer: false}, {url: "http://i.imgur.com/XzhZ4XS.jpg", viewer: false},
              {url: "http://i.imgur.com/Z0srapE.jpg", viewer: false}, {url: "http://i.imgur.com/IRKO1rk.jpg", viewer: false}
            ]
          }
// Hey, changed state here to manually cause a rerender, can delete later
  componentDidMount(){
    this.setState({
    images: [...this.state.images, {url: "http://i.imgur.com/IRKO1rk.jpg", viewer: false}]
      })
    }

  changeViewerState = (event) => {
    console.log(event.target)
    console.log(this.state.images)
    this.setState({
      // images: [{viewer: true ? false : true}]
    })
  }


  render(){
    return(
      <div>

        <Viewer bigImage={this.state.images.find((image) => image["viewer"] === true)}/>
        <Browser changeViewerState={this.changeViewerState} images={this.state.images}/>
      </div>
    )
  }
}
