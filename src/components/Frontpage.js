import React from 'react'
import Browser from './Browser'
import Viewer from './Viewer'

export default class Frontpage extends React.Component {
  state = {
    posts: []
          }

  componentDidMount(){
    fetch('http://localhost:8080/posts')
      .then(resp => resp.json())
      .then(results =>
        this.setState({
          posts: results
        })
      )
    }


  changeViewerState = (id) => {
    this.state.posts.find((post) => {
      if (post.key === id){
        this.setState({
          // posts: [...this.state.viewer, {viewer: true ? false : true}]
        })
      }
    })
  }

  render(){
    return(
      <div>
        <Viewer bigImage={this.state.posts.find((post) => post["viewer"] === true)}/>
        <Browser changeViewerState={this.changeViewerState} posts={this.state.posts}/>
      </div>
    )
  }
}
