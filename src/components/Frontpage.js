import React from 'react'
import Browser from './Browser'
import Viewer from './Viewer'
import Header from './Header'
import Footer from './Footer'
import fetch from 'isomorphic-fetch'

export default class Frontpage extends React.Component {
  state = {
    posts: [],
    viewer: {},
    subreddit: "earthporn",
    sort_by: "top"
  }

  handleSubreddit = (subreddit) => {
    this.setState({
      subreddit: subreddit
    })
  }

  addToStore = () => {
    let myInit = {
      method: "post",
      body: JSON.stringify(this.state.viewer),
      headers: {
        "Content-Type": "application/json"
      }
    }
    return fetch("http://localhost:8080/posts", myInit )
      .then(resp => resp.json()).then(result => console.log(result))
  }

  reddit = () => {
    return fetch(`http://localhost:8080/posts?sub_reddit=${this.state.subreddit}&sort=${this.state.sort_by}`)
      .then(resp => resp.json())
      .then(results =>
        this.setState({
          posts: results
        })
      )
  }

  morePosts = () => {
    fetch(`http://localhost:8080/posts/next_page?sub_reddit=${this.state.subreddit}&sort=${this.state.sort_by}`)
      .then(resp => resp.json())
      .then(results =>
        this.setState({
          posts: [...this.state.posts, ...results]
        })
      )
  }

  componentDidMount(){
    this.reddit()
    }

  changeViewerState = (post) => {
    let selectedPost = post
    let oldView = [this.state.viewer]
    let newState = {}
    newState["viewer"] = selectedPost
    newState["posts"] = oldView.concat(this.state.posts)
    this.setState(newState)
  }

  render(){
    return(
      <div>
        <Header />
        <Viewer
          selected={this.state.viewer}
          changeViewerState={this.changeViewerState} />
        <Browser
          addToStore={this.addToStore}
          changeViewerState={this.changeViewerState}
          posts={this.state.posts}
          changeSubreddit={this.handleSubreddit}
          subreddit={this.state.subreddit}
          search={this.reddit} />
        <Footer
          morePosts={this.morePosts}/>
      </div>
    )
  }
}
