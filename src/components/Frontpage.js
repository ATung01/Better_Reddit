import React from 'react'
import Browser from './Browser'
import Viewer from './Viewer'

export default class Frontpage extends React.Component {
  state = {
    posts: [],
    viewer: []

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
    // this.setState({
    //   posts: [...this.state.posts, oldView]
    // })
    let selectedPost
    let oldView
    let newState = {}

    let selectedIndex = this.state.posts.findIndex((post) => {
      return post.id === id
    })

    oldView = this.state.viewer.splice(0, 1)
    selectedPost = this.state.posts.splice(selectedIndex, 1)
    newState["viewer"] = selectedPost
    newState["posts"] = this.state.posts.concat(oldView)
    console.log(newState)

    // if (oldView.length !== 0) {
    //   console.log(oldView)
    //   newState["posts"].push(oldView)
    // }


    this.setState(newState)

  }

  render(){
    return(
      <div>
        <Viewer bigImage={this.state.viewer}/>
        <Browser changeViewerState={this.changeViewerState} posts={this.state.posts}/>
      </div>
    )
  }
}
